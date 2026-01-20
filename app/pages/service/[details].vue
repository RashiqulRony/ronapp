<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
    <figure v-if="service.image" class="aspect-video overflow-hidden rounded-lg">
      <img :src="useRuntimeConfig().public.assetUrl+'/service/'+ service?.image" :alt="service?.title" class="h-full w-full object-cover" />
    </figure>
    <article class="prose mt-6 dark:prose-invert xl:prose-lg prose-headings:font-medium prose-blockquote:border-primary lg:mt-10">
      <h2 class="">{{ service?.title }}</h2>
      <h3 class="">{{ service?.short_description }}</h3>
      <div v-html="service?.description"></div>
    </article>

    <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
      <h3 class="text-2xl font-semibold dark:text-light">My Expert Area</h3>
      <div v-if="service.skills" class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="text-center" v-for="(skill, sk) in service.skills" :key="sk">
          <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img :src="useRuntimeConfig().public.assetUrl+'/skill/'+ skill.logo" :alt="skill.title" class="h-10 w-10" />
          </div>
          <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
            {{ limitText(skill.title, 10) }}
          </p>
        </div>
      </div>
    </div>

    <Features />

  </div>
</template>

<script setup>
import Skills from "~/components/home/Skills.vue";

const route = useRoute()
const { $axios } = useNuxtApp()
const slug = route.params.details
const config = useRuntimeConfig()
const { data: service } = await $axios.get(`/service/${slug}`)

const limitText = (text, limit) => {
  return text.length > limit
      ? text.slice(0, limit) + '...'
      : text
}

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

