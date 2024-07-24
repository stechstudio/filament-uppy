<?php

use Illuminate\Support\Facades\Route;
use STS\LaravelUppyCompanion\LaravelUppyCompanion;

Route::prefix('filament-uppy-upload')->group(function () {
    LaravelUppyCompanion::routes(app('laravel-uppy-companion.filament-uppy'));
});
