<x-dynamic-component
    :component="$getFieldWrapperView()"
    :field="$field"
>
    <x-filament::input.wrapper
        :disabled="$isDisabled()"
        :valid="!$errors->has($getStatePath())"
        :attributes="
            \Filament\Support\prepare_inherited_attributes($getExtraAttributeBag())
                ->class(['sts-fi-file-uploader'])
        "
    >
        <div
            wire:ignore
            x-data="fileUploaderComponent({
                state: $wire.{{ $applyStateBindingModifiers("\$entangle('{$getStatePath()}')") }},

                uploadEndpoint: '{{ $getUploadEndpoint() }}',
                successEndpoint: '{{ $getSuccessEndpoint() }}',
                deleteEndpoint: '{{ $getDeleteEndpoint() }}',

                uploadingMessage: @js($getUploadingMessage()),
            })"

            x-bind:class="{
                'ring-primary-500': dragDepth > 0,
                'divide-y divide-gray-200 dark:divide-white/10': state.length + Object.keys(filesInProgress).length > 0,
            }"

            x-on:dragenter.prevent.stop="dragDepth++"
            x-on:dragleave.prevent.stop="dragDepth--"
            x-on:dragover.prevent.stop=""
            x-on:drop.prevent.stop="([...event.dataTransfer.files]).forEach((file) => {
                uppy.addFile({
                    name: file.name,
                    type: file.type,
                    data: file,
                });
                dragDepth = 0;
            })"
        >
            <table
                x-show="state.length + Object.keys(filesInProgress).length > 0"
                class="w-full table-auto divide-y divide-gray-200 dark:divide-white/5"
            >
                <thead>
                    <tr>
                        <th
                            scope="col"
                            class="w-1/2 px-3 py-2 text-start text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                            File
                        </th>

                        <th
                            scope="col"
                            class="w-1/2 px-3 py-2 text-start text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                            Size
                        </th>

                        <th
                            scope="col"
                            class="w-0"
                        ></th>
                    </tr>
                </thead>

                <tbody>
                    <template x-for="(file, index) in state" :key="index">
                        <tr>
                            <td class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200">
                                <span x-text="file.name"></span>
                            </td>

                            <td class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200">
                                <span
                                    x-show="!file.error"
                                    x-text="humanReadableFilesize(file.size)"
                                ></span>
                                <span
                                    x-show="!!file.error"
                                    class="text-red-500"
                                >Error</span>
                            </td>

                            <td class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200">
                                <span
                                    class="font-semibold hover:underline cursor-pointer text-sm text-gray-700 dark:text-gray-200"
                                    x-on:click="removeCompletedFile(index)"
                                >
                                    Remove
                                </span>
                            </td>
                        </tr>
                    </template>

                    <template x-for="(file, index) in filesInProgress" :key="index">
                        <tr>
                            <td class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200">
                                <span x-text="file.name"></span>
                            </td>

                            <td class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200">
                                <span x-text="humanReadableFilesize(file.size)"></span>
                                <span x-text="'(' + file.progress + '%)'"></span>
                            </td>

                            <td class="px-3 py-2 text-sm text-gray-700 dark:text-gray-200">
                                <span
                                    class="font-semibold hover:underline cursor-pointer text-sm text-gray-700 dark:text-gray-200"
                                    x-on:click="removeFileInProgress(index)"
                                >
                                    Cancel
                                </span>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>

            <div
                x-show="state.length + Object.keys(filesInProgress).length === 0"
                x-on:click="$refs.fileInput.click()"
                class="align-middle cursor-pointer flex flex-col items-center px-3 py-2"
            >
                @if(!empty($getEmptyIcon()))
                    <div>
                        <x-filament::icon
                            :icon="$getEmptyIcon()"
                            wire:target="search"
                            class="h-32 text-gray-500 dark:text-gray-400"
                        />
                    </div>
                @endif

                @if(!empty($getEmptyMessage()))
                    <div class="font-semibold text-sm text-gray-700 dark:text-gray-200">
                        {{ $getEmptyMessage() }}
                    </div>
                @endif
            </div>

            <div
                x-show="state.length + Object.keys(filesInProgress).length > 0"
                class="flex justify-center px-3 py-2"
            >
                <button
                    x-on:click="$refs.fileInput.click()"
                    class="fi-link group/link relative inline-flex items-center justify-center outline-none fi-size-md fi-link-size-md gap-1.5  fi-color-gray fi-ac-action fi-ac-link-action"
                    type="button"
                    wire:loading.attr="disabled"
                >
                    <span class="font-semibold group-hover/link:underline group-focus-visible/link:underline text-sm text-gray-700 dark:text-gray-200">
                        Add files
                    </span>
                </button>
            </div>

            <input type="file"
                multiple
                x-ref="fileInput"
                class="hidden"
                x-on:change="([...event.target.files]).forEach((file) => {
                   uppy.addFile({
                       source: 'file input',
                       name: file.name,
                       type: file.type,
                       data: file,
                   })
                })"
            />
        </div>
    </x-filament::input.wrapper>
</x-dynamic-component>
