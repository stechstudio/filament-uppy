import Uppy from '@uppy/core';
import AwsS3 from '@uppy/aws-s3';
import FileInput from '@uppy/file-input';
import prettierBytes from '@transloadit/prettier-bytes';
import getDroppedFiles from '@uppy/utils/lib/getDroppedFiles';

class File {
    constructor(uppyFile, url, completed) {
        this.id = uppyFile.id;
        this.name = uppyFile.name;
        this.url = url;
        this.completed = completed;
        this.percentage = completed ? 100 : 0;
        this.error = false;
        this.size = uppyFile.size;
        this.humanSize = prettierBytes(uppyFile.size);
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            size: this.size,
            url: this.url,
        };
    }

    updateProgress(progress) {
        this.percentage = progress.percentage;

        if (this.percentage == 100) {
            this.completed = true;
        }
    }

    updateUrl(response) {
        this.url = response.uploadURL;
    }

    markCompleted() {
        this.percentage = 100;
        this.completed = true;
    }

    markErrored() {
        this.error = true;
    }
}

class InternalState {
    constructor() {
        this.files = {};

        this.length = 0;
        this.inProgress = 0;
        this.errors = 0;
    }

    empty() {
        return this.length == 0;
    }

    filled() {
        return this.length > 0;
    }

    done() {
        return this.errors == 0 && this.inProgress == 0;
    }

    get(id) {
        return this.files[id];
    }

    addInProgress(uppyFile) {
        ++this.inProgress;

        ++this.length;
        this.files[uppyFile.id] = new File(uppyFile, '', false);
    }

    addComplete(object) {
        ++this.length;
        this.files[object.id] = new File(object, object.url, true);
    }

    removeInProgress(file) {
        --this.inProgress;
        if (file.error) {
            --this.errors;
        }

        --this.length;
        delete this.files[file.id];
    }

    removeComplete(file) {
        --this.length;
        delete this.files[file.id];
    }

    markCompleted(uppyFile, response) {
        --this.inProgress;

        const file = this.files[uppyFile.id];

        file.updateUrl(response);
        file.markCompleted();
    }

    markErrored(uppyFile, _error, _response) {
        ++this.errors;

        this.files[uppyFile.id].markErrored();
    }

    updateProgress(uppyFile, progress) {
        this.files[uppyFile.id].updateProgress(progress);
    }

    load(externalState) {
        for (const object of externalState) {
            this.addComplete(object);
        }
    }

    export() {
        return Object.values(this.files)
            .filter(file => file.completed)
            .map(file => file.toObject());
    }
}

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

        internalState: new InternalState(),

        uppy: new Uppy({
            autoProceed: true,
            allowMultipleUploads: true,
            restrictions,
        }),

        busy: false,

        dragDepth: 0,

        init() {
            if (!Array.isArray(this.state)) {
                this.state = [];
            }

            // After initialization, we don't want Livewire updates to ever
            // affect our own state. The uploader is always the source of
            // truth.
            this.pullState();

            window.addEventListener('beforeunload', (e) => {
                if (!this.busy) return;
                e.preventDefault();
                e.returnValue = 'Are you sure you want to leave? Uploads in progress will be cancelled.';
            });

            this.initUppy();
        },

        pullState() {
            this.internalState.load(this.state);
        },

        pushState() {
            this.state = this.internalState.export();
        },

        initUppy() {
            this.uppy
                .on('file-added', this.fileAdded.bind(this))
                .on('upload-progress', this.uploadProgress.bind(this))
                .on('upload-success', this.uploadSuccess.bind(this))
                .on('upload-error', this.uploadError.bind(this));

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

        // NOTE: this handler ensures that files can be added by dropping a
        // folder of files rather than just files themselves.
        handleDrop(event) {
            getDroppedFiles(event.dataTransfer, {
                logDropError: (error) => this.uppy.log(error, 'error'),
            }).then((files) => {
                const descriptors = files.map((file) => ({
                    name: file.name,
                    type: file.type,
                    data: file,
                    meta: {
                        relativePath: file.relativePath || null,
                    },
                }));

                try {
                    this.uppy.addFiles(descriptors);
                } catch (error) {
                    this.uppy.log(error);
                }
            });
        },

        fileAdded(uppyFile) {
            this.affectsBusyState(() => {
                this.internalState.addInProgress(uppyFile);
            });
        },

        uploadProgress(uppyFile, _progress) {
            // NOTE: despite what the Uppy documentation suggests, the
            // `uppyFile.progress` object is not functionally equivalent to the
            // `_progress` object (the latter lacks a `percentage` property)
            this.internalState.updateProgress(uppyFile, uppyFile.progress);
        },

        uploadSuccess(uppyFile, response) {
            this.affectsBusyState(() => {
                this.uppy.removeFile(uppyFile.id);
                this.internalState.markCompleted(uppyFile, response)
            });

            this.callSuccessEndpoint(uppyFile, response);
        },

        uploadError(uppyFile, error, response) {
            this.affectsBusyState(() => {
                this.internalState.markErrored(uppyFile, error, response);
            });

            this.callErrorEndpoint(uppyFile, error, response);
        },

        removeFile(id) {
            this.affectsBusyState(() => {
                const file = this.internalState.get(id);

                if (!file) {
                    return;
                }

                if (file.completed) {
                    this.removeCompletedFile(file);
                } else {
                    this.removeFileInProgress(file);
                }
            });
        },

        removeCompletedFile(file) {
            this.affectsBusyState(() => {
                this.internalState.removeComplete(file);
            });

            this.callDeleteEndpoint(file);
        },

        removeFileInProgress(file) {
            this.affectsBusyState(() => {
                this.uppy.removeFile(file.id);
                this.internalState.removeInProgress(file);
            });
        },

        // A wrapper that properly handles events, busy state, and syncs
        // internal state.
        affectsBusyState(cb) {
            if (!this.busy) {
                this.dispatchFormEvent('form-processing-started', {
                    message: uploadingMessage,
                });

                this.busy = true;
            }

            cb();

            if (this.internalState.done()) {
                this.busy = false;
                this.pushState();
                this.dispatchFormEvent('form-processing-finished');
            }
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

        hovering() {
            return this.dragDepth > 0;
        },

        callSuccessEndpoint(file, response) {
            if (!successEndpoint) {
                return;
            }

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
        },

        callErrorEndpoint(file, error, response) {
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
        },

        callDeleteEndpoint(file) {
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
        },
    };
}
