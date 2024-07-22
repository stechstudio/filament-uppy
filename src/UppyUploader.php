<?php

namespace STS\FilamentUppy;

use Closure;
use Filament\Forms\Components\Field;

class UppyUploader extends Field
{
    protected Closure|string $uploadEndpoint = '';

    protected Closure|string $successEndpoint = '';

    protected Closure|string $deleteEndpoint = '';

    protected string $view = 'filament-uppy::uppy-uploader';

    public function endpoints(Closure|string $upload, Closure|string $success = '', Closure|string $delete = ''): static
    {
        $this->uploadEndpoint = $upload;
        $this->successEndpoint = $success;
        $this->deleteEndpoint = $delete;

        return $this;
    }

    public function getUploadEndpoint(): string
    {
        return is_callable($this->uploadEndpoint) ? call_user_func($this->uploadEndpoint) : $this->uploadEndpoint;
    }

    public function getSuccessEndpoint(): string
    {
        return is_callable($this->successEndpoint) ? call_user_func($this->successEndpoint) : $this->successEndpoint;
    }

    public function getDeleteEndpoint(): string
    {
        return is_callable($this->deleteEndpoint) ? call_user_func($this->deleteEndpoint) : $this->deleteEndpoint;
    }
}
