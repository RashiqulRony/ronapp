<template>
    <div class="swiper-slide" v-for="blog in blogs.data">
      <div class="">
        <div class="relative">
          <NuxtLink :to="'/blog/'+blog.slug"  class="group block aspect-6/4 overflow-hidden rounded-lg">
            <img :src="useRuntimeConfig().public.assetUrl+'/blog/'+ blog.image" :alt="blog?.title" class="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105" />
          </NuxtLink>

          <!-- Tags -->
          <div class="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <a href="#" class="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
              Development
            </a>
          </div>
        </div>
        <div class="mt-6">
          <h2 class="text-xl font-medium xl:text-2xl">
            <NuxtLink :to="'/blog/'+blog.slug" class="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
              {{ limitText(blog?.title, 30) }}
            </NuxtLink>
          </h2>

          <ul class="mt-4 flex flex-wrap items-center gap-2">
            <li class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
              {{ blog?.created_at }}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#imports'

/* Props */
const props = defineProps({
  limit: {
    type: Number,
    default: 10
  }
})

/* State */
const blogs = ref([])

/* Axios */
const { $axios } = useNuxtApp()

/* Methods */
const getBlogs = async () => {
  try {
    const apiUrl = props.limit === 0 ? '/blogs' : `/blogs?limit=${props.limit}`
    const response = await $axios.get(apiUrl)
    blogs.value = response.data
  } catch (error) {
    console.log(error)
  }
}

const limitText = (text, limit) => {
  return text.length > limit
      ? text.slice(0, limit) + '...'
      : text
}

/* Lifecycle */
onMounted(() => {
  getBlogs()
})
</script>