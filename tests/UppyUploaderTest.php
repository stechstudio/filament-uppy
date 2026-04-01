<?php

use STS\FilamentUppy\UppyUploader;

it('can be instantiated', function () {
    $field = UppyUploader::make('files');
    expect($field)->toBeInstanceOf(UppyUploader::class);
});

it('has the correct view', function () {
    $field = UppyUploader::make('files');
    expect($field->getView())->toBe('filament-uppy::uppy-uploader');
});

it('has default empty icon', function () {
    $field = UppyUploader::make('files');
    expect($field->getEmptyIcon())->toBe('heroicon-o-cloud-arrow-up');
});

it('has default empty message', function () {
    $field = UppyUploader::make('files');
    expect($field->getEmptyMessage())->toBe('Drop files here or click to upload.');
});

it('has empty default restrictions', function () {
    $field = UppyUploader::make('files');
    expect($field->getRestrictions())->toBe([]);
});

it('can set endpoints', function () {
    $field = UppyUploader::make('files')
        ->endpoints(upload: '/sign', success: '/success', delete: '/delete');

    expect($field->getUploadEndpoint())->toBe('/sign')
        ->and($field->getSuccessEndpoint())->toBe('/success')
        ->and($field->getDeleteEndpoint())->toBe('/delete');
});

it('can set empty icon', function () {
    $field = UppyUploader::make('files')
        ->emptyIcon('heroicon-o-arrow-up-tray');

    expect($field->getEmptyIcon())->toBe('heroicon-o-arrow-up-tray');
});

it('can set empty message', function () {
    $field = UppyUploader::make('files')
        ->emptyMessage('Upload your files');

    expect($field->getEmptyMessage())->toBe('Upload your files');
});

it('can set restrictions', function () {
    $restrictions = [
        'maxFileSize' => 5242880,
        'maxNumberOfFiles' => 10,
        'allowedFileTypes' => ['image/*'],
    ];

    $field = UppyUploader::make('files')
        ->restrictions($restrictions);

    expect($field->getRestrictions())->toBe($restrictions);
});
