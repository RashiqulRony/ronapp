<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
    <figure v-if="blog.image" class="aspect-video overflow-hidden rounded-lg">
      <img :src="useRuntimeConfig().public.assetUrl+'/blog/'+ blog?.image" :alt="blog?.title" class="h-full w-full object-cover" />
    </figure>

    <ul class="mt-4 flex flex-wrap items-center gap-4 md:gap-6">
      <li class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
        {{ formatDate(blog?.created_at) }}
      </li>
      <li class="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
        {{ formatCount(blog?.views) }} Views
      </li>
    </ul>

    <article class="prose mt-6 dark:prose-invert xl:prose-lg prose-headings:font-medium prose-blockquote:border-primary lg:mt-10">
      <h2 class="">{{ blog?.title }}</h2>
      <div v-html="blog?.description"></div>
    </article>

    <div class="mt-10 flex flex-wrap justify-between gap-4">
      <div class="flex flex-wrap items-center gap-5">
        <h6 class="text-lg font-medium text-dark dark:text-light">Tags:</h6>

        <div class="flex flex-wrap gap-2">
          <a href="#" class="inline-flex items-center justify-center gap-2 rounded border border-light bg-white px-2 py-1 text-center text-xs font-medium leading-none text-dark transition hover:bg-primary hover:text-white dark:border-dark dark:bg-dark-2 dark:text-light/70 dark:hover:bg-primary dark:hover:text-white">
            Development
          </a>
          <a href="#" class="inline-flex items-center justify-center gap-2 rounded border border-light bg-white px-2 py-1 text-center text-xs font-medium leading-none text-dark transition hover:bg-primary hover:text-white dark:border-dark dark:bg-dark-2 dark:text-light/70 dark:hover:bg-primary dark:hover:text-white">
            Design Trend
          </a>
        </div>
      </div>

      <BlogShare :title="blog.title"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { $axios } = useNuxtApp()
const slug = route.params.details
const config = useRuntimeConfig()
const { data: blog } = await $axios.get(`/blog/${slug}`)

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date))
}

const formatCount = (num) => {
  if (!num) return '0'

  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K'

  return num.toString()
}


/* SEO */
useHead(() => {
  if (!blog) return {}
  const image = blog.image ? `${config.public.assetUrl}/blog/${blog.image}` : ''
  return {
    title: blog.title,
    meta: [
      { name: 'description', content: blog.subtitle || '' },
      { name: 'keywords', content: `Rashiqul Rony, Blog, ${blog.title}', Web and App Developer, 8 years experience, Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter, React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, Fullstack Developer, Software Engineer, Senior Software Engineer, Search Engine optimized` },


      // Open Graph
      { property: 'og:title', content: blog.title },
      { property: 'og:description', content: blog.subtitle || '' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `https://ronapp.page.gd/blog/${slug}` },
      { property: 'og:image', content: image },

      // Twitter
      { name: 'twitter:card', content: image },
      { name: 'twitter:title', content: blog.title },
      { name: 'twitter:description', content: blog.subtitle || '' },
      { name: 'twitter:image', content: image }
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://ronapp.page.gd/blog/${slug}`
      }
    ]
  }
})
</script>

