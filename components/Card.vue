<template>
  <div class="flex gap-3 bg-white p-3 rounded-lg shadow-md mb-3">
    <div class="w-24 h-24 overflow-hidden rounded-lg flex shrink-0">
      <slot name="thumbnail" />
    </div>
    <div class="flex w-full flex-col justify-between">
      <div class="flex flex-col text-gray">
        <div class="text-xs font-medium tracking-wide">
          <slot name="author" />
        </div>
        <div class="font-bold tracking-wide">
          <slot name="title" />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-xxs bg-green text-white flex items-center px-4 py-1 rounded-full">
          <slot name="genre" />
        </div>
        <div class="flex items-center gap-1 text-xs text-orange font-bold">
          <Icon name="heroicons:currency-dollar" size="20" class="font-bold"/> <slot name="price" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>