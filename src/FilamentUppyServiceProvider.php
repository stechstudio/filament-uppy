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
            ->hasConfigFile()
            ->hasViews()
            ->hasRoute('web');
    }

    public function packageRegistered()
    {
        App::singleton('filament-uppy', fn () => new LaravelUppyCompanion());
    }
}
