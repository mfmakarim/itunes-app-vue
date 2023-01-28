<template>
  <div class="flex flex-col h-screen bg-gradient-to-b from-primary to-secondary p-8 justify-between">
    <div class="flex flex-1 flex-col items-center justify-center">
        <img src="/images/logo.svg" alt="itune clone logo"/>
    </div>
    <div class="flex flex-col gap-5">
        <!-- <button class="bg-white text-blue-gray p-3 rounded-full w-full text-sm">Artist / Album / Title</button> -->
      <input v-model="keyword" type="text" placeholder="Artist / Album / Title" class="py-3 px-5 text-sm text-center rounded-full w-full outline-none focus:outline-none focus:border focus:border-secondary"/>
      <button @click="searchTerm" class="bg-white bg-opacity-20 text-white text-sm p-3 rounded-full w-full">Search</button>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "home",
});
const keyword = ref('')
const searchTerm = async () => {
  await navigateTo({
  path: '/feeds',
    query: {
      term: keyword.value
    }
  })
}
</script>