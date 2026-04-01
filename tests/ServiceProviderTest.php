<?php

it('registers the views', function () {
    $viewFactory = app('view');
    expect($viewFactory->exists('filament-uppy::uppy-uploader'))->toBeTrue();
});
