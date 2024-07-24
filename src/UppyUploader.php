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

    public function companion(Closure|LaravelUppyCompanion|string $companion): static
    {
        $this->companion = $companion;

        return $this;
    }

    // TODO: This matches the companion class' signature for this method. But we need to evaluate these closures the Filament way.
    public function configure(Closure|string $bucket, Closure|S3ClientInterface $client, ?Closure $key = null): static
    {
        $this->getCompanion()->configure($bucket, $client, $key);

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
