<?php

namespace STS\FilamentUppy;

use Closure;
use Filament\Forms\Components\Field;
use STS\LaravelUppyCompanion;

class UppyUploader extends Field
{
    protected Closure|string $uploadEndpoint = '';

    protected Closure|string $successEndpoint = '';

    protected Closure|string $deleteEndpoint = '';

    protected Closure|LaravelUppyCompanion|string|null $companion;

    protected string $view = 'filament-uppy::uppy-uploader';

    public function endpoints(Closure|string $upload, Closure|string $success = '', Closure|string $delete = ''): static
    {
        $this->uploadEndpoint = $upload;
        $this->successEndpoint = $success;
        $this->deleteEndpoint = $delete;

        return $this;
    }

    public function companion(Closure|LaravelUppyCompanion|string $companion): static
    {
        $this->companion = $companion;

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
        // If no companion was provided, resolve the default companion.
        if ($this->companion === null) {
            return app(LaravelUppyCompanion::class);
        }

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
