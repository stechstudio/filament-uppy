<?php

namespace STS\FilamentUppy;

use Filament\Contracts\Plugin;
use Filament\Panel;

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
        $panel
            ->assets([
            ]);
    }

    public function boot(Panel $panel): void
    {
    }
}
