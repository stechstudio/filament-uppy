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

        busy: false,

        dragDepth: 0,

        filesInProgress: {},

        uppy: new Uppy({
            autoProceed: true,
            allowMultipleUploads: true,
            restrictions,
        }),

        init() {
            if (!Array.isArray(this.state)) {
                this.state = [];
            }

            window.addEventListener('beforeunload', (e) => {
                if (!this.busy) return;
                e.preventDefault();
                e.returnValue = 'Are you sure you want to leave? Uploads in progress will be cancelled.';
            });

            this.uppy
                .on('file-added', (file) => {
                    this.busy = true;
                    this.filesInProgress[file.id] = {
                        id: file.id,
                        name: file.name,
                        size: file.size,
                        progress: 0,
                    };

                    this.dispatchFormEvent('form-processing-started', {
                        message: uploadingMessage,
                    })
                })
                .on('upload-progress', (file, progress) => this.filesInProgress[file.id].progress = ((progress.bytesUploaded / progress.bytesTotal) * 100).toFixed(0))
                .on('upload-success', (file, response) => {
                    this.removeFileInProgress(file.id);
                    this.toggleFormProcessingState();

                    // If state array does not contain a file with the same id, add it.
                    if (!this.state.find((stateFile) => stateFile.id === file.id)) {
                        this.state.push({
                            id: file.id,
                            name: file.name,
                            size: file.size,
                            url: response.uploadURL,
                        });
                    }

                    if (!!successEndpoint) {
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
                    this.filesInProgress[file.id].error = true;
                    this.busy = true;
                    this.toggleFormProcessingState();

                    if (!!errorEndpoint) {
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
            this.uppy.removeFile(id);
            delete this.filesInProgress[id];
            this.recalculateBusy();
        },

        removeCompletedFile(index) {
            const file = this.state[index];

            if (!!file) {
                this.state.splice(index, 1);

                if (!!deleteEndpoint) {
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

        recalculateBusy() {
            for (const file of this.uppy.getFiles()) {
                if (file.error || file.progress.bytesUploaded < file.progress.bytesTotal) {
                    this.busy = true;
                    return;
                }
            }

            this.busy = false;
        },

        humanReadableFilesize(bytes) {
            return prettierBytes(bytes);
        },

        toggleFormProcessingState() {
            let uploadsInProgress = false;
            for (const file of this.uppy.getFiles()) {
                // If there is a file that is not an error and is not fully uploaded, we consider the form to be processing.
                if (!file.error && file.progress.bytesUploaded < file.progress.bytesTotal) {
                    uploadsInProgress = true;
                }
            }

            if (uploadsInProgress) {
                this.dispatchFormEvent('form-processing-started', {
                    message: this.uploadingMessage,
                });
            } else {
                this.dispatchFormEvent('form-processing-finished');
            }
        },

        dispatchFormEvent: function (name, detail = {}) {
            this.$el.closest('form')?.dispatchEvent(
                new CustomEvent(name, {
                    composed: true,
                    cancelable: true,
                    detail,
                }),
            )
        },
    }
}
