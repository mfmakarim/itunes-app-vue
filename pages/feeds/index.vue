<template>
  <div>
    <div class="flex gap-2 tracking-wide items-center justify-center p-8">
      <div class="text-gray">
        Search result for: 
      </div>
      <div class="text-primary font-bold" v-if="term">
        {{term}}
      </div>
    </div>
    <template v-if="results && !pending">

      <Card v-for="(item,i) in results" :key="i">
        <template #thumbnail>
          <img :src="item.artworkUrl100" alt="cover" class="object-cover w-24 h-24"/>
        </template>
        <template #author>
          {{item.artistName}}
        </template>
        <template #title>
          {{item.collectionName}}
        </template>
        <template #genre>
          {{item.primaryGenreName}}
        </template>
        <template #price>
          {{item.collectionPrice}}
        </template>
      </Card>
    </template>
    <template v-else>
      <Card>
        <template #thumbnail>
          <div class="object-cover w-24 h-24 bg-black bg-opacity-10"/>
        </template>
        <template #author>
          <div class="w-full bg-black bg-opacity-10 h-2"/>
        </template>
        <template #title>
          <div class="w-full bg-black bg-opacity-10 h-2"/>
        </template>
        <template #genre>
          <div class="w-5 bg-black bg-opacity-10 h-2"/>
        </template>
        <template #price>
          <div class="w-2 bg-black bg-opacity-10 h-2"/>
        </template>
      </Card>
    </template>
    <div class="flex justify-center block py-10">
      <button @click="loadMore" class="bg-blue-900 bg-opacity-10 py-2 px-7 rounded-full text-blue-gray font-medium tracking-wide text-xs">Load More</button>
    </div>
  </div>
</template>
<script setup>
  const results = ref([])
  const route = useRoute()
  const term = route.query.term || ''
  const limit = route.query.limit || 25
  const url = `https://itunes.apple.com/search?term=${term}&media=music&entity=song&limit=${limit}`
  const { data, pending, refresh } = await useAsyncData('results', () => $fetch(url))
  const value = await JSON.parse(data.value)
  results.value = value.results
  const loadMore = () => {
    const router = useRouter()
    const newLimit = parseInt(limit) + 25
    router.push({ path: '/feeds', 
      query: {
        term, 
        limit: newLimit
      }
    })
  }
  watch(() => route.query, () => {
    refresh()
  })
</script>