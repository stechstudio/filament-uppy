import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import FileInput from '@uppy/file-input';
import prettierBytes from '@transloadit/prettier-bytes';

window.fileUploaderComponent = function fileUploaderComponent({
    state,

    uploadEndpoint,
    successEndpoint,
    errorEndpoint,
    deleteEndpoint,

    uploadingMessage,

    restrictions,
}) {
    return {
        state,
        internalState: {},

        nFiles: 0,
        nProgress: 0,
        nErrors: 0,

        busy: false,

        dragDepth: 0,

        uppy: new Uppy({
            autoProceed: true,
            allowMultipleUploads: true,
            restrictions,
        }),

        init() {
            if (!Array.isArray(this.state)) {
                this.state = [];
            }

            // After initialization, we don't want Livewire updates to ever affect our
            // own state. The uploader is always the source of truth.
            for (const file of this.state) {
                this.internalState[file.id] = {
                    id: file.id,
                    name: file.name,
                    size: file.size,
                    url: file.url,
                };

                this.nFiles = Object.keys(this.internalState).length;
            }

            window.addEventListener('beforeunload', (e) => {
                if (!this.busy) return;
                e.preventDefault();
                e.returnValue = 'Are you sure you want to leave? Uploads in progress will be cancelled.';
            });

            this.uppy
                .on('file-added', (file) => {
                    this.affectsBusyState(() => {
                        this.internalState[file.id] = {
                            id: file.id,
                            name: file.name,
                            size: file.size,
                            progress: 0,
                        };

                        ++this.nFiles;
                        ++this.nProgress;
                    });
                })
                .on('upload-progress', (file, progress) => this.internalState[file.id].progress = ((progress.bytesUploaded / progress.bytesTotal) * 100).toFixed(0))
                .on('upload-success', (file, response) => {
                    this.affectsBusyState(() => {
                        this.uppy.removeFile(file.id);
                        this.internalState[file.id] = {
                            id: file.id,
                            name: file.name,
                            size: file.size,
                            url: response.uploadURL,
                        };

                        --this.nProgress;
                    });

                    if (successEndpoint) {
                        const key = response.uploadURL.split('/').pop();
                        const uuid = key.split('.')[0];
                        const name = file.name;

                        fetch(successEndpoint, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                            },
                            body: JSON.stringify({key, uuid, name}),
                        });
                    }
                })
                .on('upload-error', (file, error, response) => {
                    this.affectsBusyState(() => {
                        this.internalState[file.id].error = true;

                        ++this.nErrors;
                    });

                    if (errorEndpoint) {
                        fetch(errorEndpoint, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                            },
                            body: JSON.stringify({
                                name: file.name,
                                size: file.size,
                                error,
                            }),
                        });
                    }
                });

            this.uppy.use(AwsS3, {
                endpoint: uploadEndpoint,
                getChunkSize: (file) => 100 * 1024 * 1024, // 100MB
                shouldUseMultipart: (file) => file.size > 100 * 1024 * 1024, // 100MB
            });

            this.uppy.use(FileInput, {
                target: this.$refs.fileInput,
                pretty: false,
            });
        },

        hovering() {
            return this.dragDepth > 0;
        },

        removeFileInProgress(id) {
            this.affectsBusyState(() => {
                this.uppy.removeFile(id);

                const file = this.internalState[id];
                delete this.internalState[id];

                --this.nFiles;
                --this.nProgress;
                if (file.error) {
                    --this.nErrors;
                }
            });
        },

        removeCompletedFile(id) {
            const file = this.internalState[id];

            if (file) {
                this.affectsBusyState(() => {
                    delete this.internalState[id];

                    --this.nFiles;
                });

                if (deleteEndpoint) {
                    const key = file.url.split('/').pop();
                    const uuid = key.split('.')[0];
                    const name = file.name;
                    const url = file.url;

                    fetch(deleteEndpoint, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                        },
                        body: JSON.stringify({ name, url, uuid }),
                    });
                }
            }
        },

        humanReadableFilesize(bytes) {
            return prettierBytes(bytes);
        },

        dispatchFormEvent(name, detail = {}) {
            this.$el.closest('form')?.dispatchEvent(
                new CustomEvent(name, {
                    composed: true,
                    cancelable: true,
                    detail,
                }),
            )
        },

        internalStateLength() {
            return this.nFiles;
        },

        fileComplete(id) {
            return this.internalState[id].progress === undefined;
        },

        // A wrapper that properly handles events, busy state, and syncs internal state.
        affectsBusyState(cb) {
            if (!this.busy) {
                this.dispatchFormEvent('form-processing-started', {
                    message: uploadingMessage,
                });
                this.busy = true;
            }

            cb();

            const done = this.nErrors == 0 && this.nProgress == 0;
            this.busy = !done;

            if (done) {
                this.state = Object.values(this.internalState)
                    .filter(file => file.progress === undefined);
                this.dispatchFormEvent('form-processing-finished');
            }
        },
    }
}
