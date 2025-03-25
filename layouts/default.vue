<template>
    <div class="flex flex-col justify-between items-stretch h-full">
        <header
            class="fixed w-full top-0 z-50 border-dashed border-b border-gray-200 bg-white"
        >
            <div class="max-w-8xl mx-auto">
                <div class="py-4 mx-4">
                    <div class="relative flex items-center">
                        <h1 class="font-bold">HZYCODER</h1>
                    </div>
                </div>
            </div>
        </header>
        <main class="max-w-7xl mx-auto w-full p-4 mt-14 flex-1">
            <slot />
        </main>
        <footer
            class="text-gray-400 w-full flex items-center justify-center gap-1 py-3 border-dashed border-t"
        >
            <span class="text-default-600 text-xs">© 2025 hzycoder.com</span>
        </footer>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
