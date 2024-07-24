<?php

namespace STS\FilamentUppy;

use Illuminate\Support\Facades\App;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;
use STS\LaravelUppyCompanion\LaravelUppyCompanion;

class FilamentUppyServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-uppy';

    public function configurePackage(Package $package): void
    {
        $package
            ->name(static::$name)
            ->hasViews()
            ->hasRoute('web');
    }

    public function packageRegistered()
    {
        App::singleton('laravel-uppy-companion.filament-uppy', fn () => new LaravelUppyCompanion());
    }
}
