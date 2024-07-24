<?php

namespace STS\FilamentUppy;

use Aws\S3\S3ClientInterface;
use Closure;
use Filament\Forms\Components\Field;
use STS\LaravelUppyCompanion;

class UppyUploader extends Field
{
    // Defaults to the built-in companion instance's upload route.
    protected Closure|string $uploadEndpoint = '/filament-uppy-upload/upload';

    protected Closure|string $successEndpoint = '';

    protected Closure|string $deleteEndpoint = '';

    protected Closure|LaravelUppyCompanion|string $companion = 'laravel-uppy-companion.filament-uppy';

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

    /**
     * Explicitly provide a LaravelUppyCompanion instance or a string reference to a singleton.
     *
     * @param Closure|LaravelUppyCompanion|string $companion
     * @return $this
     */
    public function companion(Closure|LaravelUppyCompanion|string $companion): static
    {
        $this->companion = $companion;

        return $this;
    }

    /**
     * Manually configure the default or provided LaravelUppyCompanion instance.
     *
     * @param Closure|string $bucket The S3 bucket name or a callback to resolve it.
     * @param Closure|S3ClientInterface $client The S3 client instance or a callback to resolve it.
     * @param Closure|null $key A callback to resolve the key for the uploaded file. (optional)
     * @return $this
     * @throws \Exception
     */
    public function configure(Closure|string $bucket, Closure|S3ClientInterface $client, ?Closure $key = null): static
    {
        $this->getCompanion()->configure(
            $this->evaluate($bucket),
            $this->evaluate($client),
            $key
        );

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

    public function getCompanion(): LaravelUppyCompanion
    {
        // Resolve the companion from the provided value.
        $evaluated = $this->evaluate($this->companion);

        // If it's a string, it should refer to a specific LaravelUppyCompanion singleton.
        if (is_string($evaluated) && $evaluated !== '') {
            $evaluated = app($evaluated);
        }

        // If it's a LaravelUppyCompanion instance, return it.
        if ($evaluated instanceof LaravelUppyCompanion) {
            return $evaluated;
        }

        throw new \Exception('Invalid companion provided');
    }
}
