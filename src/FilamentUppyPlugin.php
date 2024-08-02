<?php

namespace STS\FilamentUppy;

use Filament\Contracts\Plugin;
use Filament\Panel;
use Filament\Support\Assets\Js;

class FilamentUppyPlugin implements Plugin
{
    public static function make(): static
    {
        return app(static::class);
    }

    public function getId(): string
    {
        return 'filament-uppy';
    }

    public function register(Panel $panel): void
    {
    }

    public function boot(Panel $panel): void
    {
    }
}
