<?php

namespace STS\FilamentUppy;

use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentUppyServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-uppy';

    public function configurePackage(Package $package): void
    {
        $package
            ->name(static::$name)
            ->hasViews();
    }
}
