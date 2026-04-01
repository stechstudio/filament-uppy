<?php

namespace STS\FilamentUppy\Tests;

use Orchestra\Testbench\TestCase as Orchestra;
use STS\FilamentUppy\FilamentUppyServiceProvider;

abstract class TestCase extends Orchestra
{
    protected function getPackageProviders($app): array
    {
        return [
            FilamentUppyServiceProvider::class,
        ];
    }
}
