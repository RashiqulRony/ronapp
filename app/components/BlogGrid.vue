<template>
  <div class="swiper-slide" v-if="slide" v-for="blog in blogs.data">
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
            {{ blog?.title }}
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
  <div class="" v-else v-for="blog in blogs">
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
          {{ blog?.title }}
        </NuxtLink>
      </h2>

      <ul class="mt-4 flex flex-wrap items-center gap-2">
        <li class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
          {{ blog?.created_at }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlogGrid',

  props: {
    limit: {
      type: Number,
      default: 10
    },
    slide: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      blogs: []
    }
  },

  mounted() {
    this.getBlogs()
  },

  methods: {
    async getBlogs() {
      const { $axios } = useNuxtApp()
      const apiUrl = this.limit === 0 ? '/blogs' : '/blogs?limit='+this.limit
      await $axios.get(apiUrl).then((response) => {
        this.blogs = response.data
      }).catch((error) => {
        console.log(error)
      });
    },
    limitText(text, limit) {
      return text.length > limit
          ? text.slice(0, limit) + '...'
          : text
    }
  }
}
</script>