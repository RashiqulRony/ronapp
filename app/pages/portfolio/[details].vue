<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
    {{ slug }}
  </div>
</template>

<script setup>

const route = useRoute()
const { $axios } = useNuxtApp()
const slug = route.params.details
const config = useRuntimeConfig()
const { data: portfolio } = await $axios.get(`/portfolio/${slug}`)

const limitText = (text, limit) => {
  return text.length > limit
      ? text.slice(0, limit) + '...'
      : text
}

/* SEO */
useHead(() => {
  if (!portfolio) return {}
  const image = portfolio.image ? `${config.public.assetUrl}/portfolio/${portfolio.image}` : ''
  return {
    title: portfolio.title,
    meta: [
      { name: 'description', content: portfolio.subtitle || '' },
      { name: 'keywords', content: `Rashiqul Rony, Portfolio, ${portfolio.title}', Web and App Developer, 8 years experience, Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter, React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, Fullstack Developer, Software Engineer, Senior Software Engineer, Search Engine optimized` },

      // Open Graph
      { property: 'og:title', content: portfolio.title },
      { property: 'og:description', content: portfolio.subtitle || '' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `https://ronapp.page.gd/portfolio/${slug}` },
      { property: 'og:image', content: image },

      // Twitter
      { name: 'twitter:card', content: image },
      { name: 'twitter:title', content: portfolio.title },
      { name: 'twitter:description', content: portfolio.subtitle || '' },
      { name: 'twitter:image', content: image }
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://ronapp.page.gd/portfolio/${slug}`
      }
    ]
  }
})
</script>

