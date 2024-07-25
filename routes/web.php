<?php

use Illuminate\Support\Facades\Route;
use STS\LaravelUppyCompanion\LaravelUppyCompanion;

if (config('filament-uppy.companion-routes.enabled')) {
    Route::group([
        'prefix' => 'filament-uppy-upload',
        'middleware' => config('filament-uppy.companion-routes.middleware', []),
    ],
    function () {
        LaravelUppyCompanion::routes(app('filament-uppy'));
    });
}
