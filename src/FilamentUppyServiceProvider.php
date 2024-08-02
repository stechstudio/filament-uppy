<?php

namespace STS\FilamentUppy;

use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
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

    public function packageBooted(): void
    {
        FilamentAsset::register([
            Js::make('sts-filament-uppy', __DIR__ . '/../resources/dist/filament-uppy-component.js'),
        ]);
    }
}
