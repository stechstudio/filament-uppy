# Filament Uppy Form Component
This package contains a [Filament](https://filamentphp.com/) form component called `UppyUploader` that integrates the
[Uppy JS uploader](https://uppy.io) with our own [Laravel Uppy Companion](https://github.com/stechstudio/laravel-uppy-companion).

## Installation
At this point, using this component still requires
[configuring the Laravel Uppy Companion](https://github.com/stechstudio/laravel-uppy-companion/blob/master/README.md#service-provider-configuration)
in your Laravel app with, at the very least, the bucket name and an S3 client.

```php
use Aws\S3\S3Client;
use STS\LaravelUppyCompanion\LaravelUppyCompanion;

app(LaravelUppyCompanion::class)->configure(
    'my-bucket-name',
    new S3Client(config('aws'))
);
```

Register the companion's signing routes:
```php
use STS\LaravelUppyCompanion\LaravelUppyCompanion;

Route::group(['prefix' => 'my/upload'], function () {
    LaravelUppyCompanion::routes();
});
```

Use in a Filament form schema:
```php
use STS\FilamentUppy\UppyUploader;

UppyUploader::make('files')
    ->endpoints(upload: '/my/upload/sign'),
```

The `->endpoints()` method also accepts optional `success` and `delete` arguments for endpoints that the uploader
should hit after a successful upload or when a file is deleted, respectively.

## Styles
This component uses tailwind styles that may not exist in your bundled CSS. You can include the styles in your app by
adding the vendor directory to your `tailwind.config.js` file:

```js
export default {
    content: [
        './resources/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
        './vendor/stechstudio/filament-uppy/resources/views/**/*.blade.php', // Filament Uppy's vendor directory
    ],
    // ...
}
```
