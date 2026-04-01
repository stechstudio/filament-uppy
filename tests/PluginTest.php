<?php

use STS\FilamentUppy\FilamentUppyPlugin;

it('can be instantiated via make()', function () {
    $plugin = FilamentUppyPlugin::make();
    expect($plugin)->toBeInstanceOf(FilamentUppyPlugin::class);
});

it('has the correct plugin ID', function () {
    $plugin = FilamentUppyPlugin::make();
    expect($plugin->getId())->toBe('filament-uppy');
});
