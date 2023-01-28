<template>
    <div class="flex w-screen text-white bg-gradient-to-r from-primary to-secondary items-center justify-between fixed before:content-[''] before:absolute before:bottom-0 before:left-0 before:-mb-3 before:-z-10 before:w-screen before:h-7 before:bg-gradient-to-r before:from-primary before:to-secondary before:rounded-[50%] before:shadow-md">
      <div class="p-3 cursor-pointer">
        <Icon name="ion:menu" size="24" />
      </div>
      <img src="/images/ngmusic.svg" alt="ngmusic logo" class="mt-2"/>
      <div class="p-3 cursor-pointer" @click="toggleShowSearchForm">
        <Icon name="ion:search" size="24" />
      </div>
    </div>
    <div v-if="showSearchForm" class="fixed h-screen w-screen flex flex-col items-center justify-center bg-black bg-opacity-80 z-10 p-5 gap-3">
      <div class="text-white absolute top-0 right-0 p-3 cursor-pointer" @click="toggleShowSearchForm">
        <Icon name="ion:close" size="24"/>
      </div>
      <div class="text-white font-bold tracking-wider text-xl pb-5">Search</div>
      <input v-model="keyword" type="text" placeholder="Artist / Album / Title" class="py-3 px-5 text-center rounded-full w-full outline-none focus:outline-none focus:border focus:border-secondary"/>
      <button @click="searchTerm" class="py-3 px-5 text-center text-white bg-gradient-to-r from-primary to-secondary rounded-full w-full tracking-wider">Search</button>
    </div>
</template>
<script setup>
  let showSearchForm = useState('showSearchForm', () => false)
  const toggleShowSearchForm = () => {
    showSearchForm.value = !showSearchForm.value
  }
  const keyword = ref('')
  const searchTerm = async () => {
    await navigateTo({
    path: '/feeds',
      query: {
        term: keyword.value
      }
    })
    toggleShowSearchForm()
  }
</script>