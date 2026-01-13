<template>
  <div>
    {{ slug }}
  </div>
</template>

<script setup>
const route = useRoute()
const { $axios } = useNuxtApp()
const slug = route.params.details
const config = useRuntimeConfig()
const { data: service } = await $axios.get(`/service/${slug}`)
/* SEO */
useHead(() => {
  if (!service) return {}
  const image = service.image ? `${config.public.assetUrl}/service/${service.image}` : ''
  return {
    title: service.title,
    meta: [
      { name: 'description', content: service.subtitle || '' },
      { name: 'keywords', content: `Rashiqul Rony, Service, ${service.title}', Web and App Developer, 8 years experience, Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter, React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, Fullstack Developer, Software Engineer, Senior Software Engineer, Search Engine optimized` },


      // Open Graph
      { property: 'og:title', content: service.title },
      { property: 'og:description', content: service.subtitle || '' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `https://ronapp.page.gd/service/${slug}` },
      { property: 'og:image', content: image },

      // Twitter
      { name: 'twitter:card', content: image },
      { name: 'twitter:title', content: service.title },
      { name: 'twitter:description', content: service.subtitle || '' },
      { name: 'twitter:image', content: image }
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://ronapp.page.gd/service/${slug}`
      }
    ]
  }
})
</script>

