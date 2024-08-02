<?php

namespace STS\FilamentUppy;

use Closure;
use Filament\Forms\Components\Field;
use Filament\Forms\Components\Concerns;

class UppyUploader extends Field
{
    use Concerns\HasUploadingMessage;

    // Defaults to the built-in companion instance's upload route.
    protected Closure|string $uploadEndpoint = '';

    protected Closure|string $successEndpoint = '';

    protected Closure|string $deleteEndpoint = '';

    protected Closure|array $restrictions = [];

    protected Closure|string $emptyIcon = 'heroicon-o-cloud-arrow-up';

    protected Closure|string $emptyMessage = 'Drop files here or click to upload.';

    protected string $view = 'filament-uppy::uppy-uploader';

    /**
     * Manually provide endpoints for the Uppy instance and for success and delete callbacks.
     *
     * @param Closure|string $upload The base endpoint the Uppy instance will use to sign uploads.
     * @param Closure|string $success The endpoint to hit after a successful upload. (optional)
     * @param Closure|string $delete The endpoint to hit after deleting a file. (optional)
     * @return $this
     */
    public function endpoints(Closure|string $upload = '', Closure|string $success = '', Closure|string $delete = ''): static
    {
        if (!empty($upload)) {
            $this->uploadEndpoint = $upload;
        }

        if (!empty($success)) {
            $this->successEndpoint = $success;
        }

        if (!empty($delete)) {
            $this->deleteEndpoint = $delete;
        }

        return $this;
    }

    public function emptyIcon(Closure|string $icon): static
    {
        $this->emptyIcon = $icon;

        return $this;
    }

    public function emptyMessage(Closure|string $message): static
    {
        $this->emptyMessage = $message;

        return $this;
    }

    /**
     * The array of restrictions to apply to the Uppy instance. Expects an associative array
     * with the keys being the restriction name and the value being the restriction value to be passed
     * to the Uppy instance.
     *
     * Allowed keys are:
     * maxFileSize - number - maximum file size in bytes for each individual file
     * minFileSize - number - minimum file size in bytes for each individual file
     * maxTotalFileSize - number - maximum file size in bytes for all the files that can be selected for upload
     * maxNumberOfFiles - number - total number of files that can be selected
     * minNumberOfFiles - number - minimum number of files that must be selected before the upload
     * allowedFileTypes - array of strings - wildcards image/*, or exact mime types image/jpeg, or file extensions .jpg: ['image/*', '.jpg', '.jpeg', '.png', '.gif']
     * requiredMetaFields - array of strings - make keys from the meta object in every file required before uploading
     *
     * Source: https://uppy.io/docs/uppy/#restrictions
     *
     * @param Closure|array $restrictions
     * @return $this
     */
    public function restrictions(Closure|array $restrictions): static
    {
        $this->restrictions = $restrictions;

        return $this;
    }

    public function getUploadEndpoint(): string
    {
        return $this->evaluate($this->uploadEndpoint);
    }

    public function getSuccessEndpoint(): string
    {
        return $this->evaluate($this->successEndpoint);
    }

    public function getDeleteEndpoint(): string
    {
        return $this->evaluate($this->deleteEndpoint);
    }

    public function getEmptyIcon(): string
    {
        return $this->evaluate($this->emptyIcon);
    }

    public function getEmptyMessage(): string
    {
        return $this->evaluate($this->emptyMessage);
    }

    public function getRestrictions(): array
    {
        return $this->evaluate($this->restrictions);
    }
}
