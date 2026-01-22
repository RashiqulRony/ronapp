<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
    <figure v-if="portfolio.image" class="aspect-video overflow-hidden rounded-lg">
      <img :src="useRuntimeConfig().public.assetUrl+'/portfolio/'+ portfolio?.image" :alt="portfolio?.title" class="h-full w-full object-cover" />
    </figure>
    <article class="prose mt-6 dark:prose-invert xl:prose-lg prose-headings:font-medium prose-blockquote:border-primary lg:mt-10">
      <h2 class="">{{ portfolio?.title }}</h2>
      <h3 class="">{{ portfolio?.short_description }}</h3>
      <div v-html="portfolio?.description"></div>
    </article>

    <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
      <h3 class="text-2xl font-semibold dark:text-light">Development Tools</h3>
      <div v-if="portfolio.skills" class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="text-center" v-for="(skill, sk) in portfolio.skills" :key="sk">
          <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img :src="useRuntimeConfig().public.assetUrl+'/skill/'+ skill.logo" :alt="skill.title" class="h-10 w-10" />
          </div>
          <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
            {{ limitText(skill.title, 10) }}
          </p>
        </div>
      </div>
    </div>

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
      { name: 'keywords', content: `Rashiqul Rony, Portfolio, ${portfolio.title}', Web and App Developer, 8+ years experience, Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter, React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, Fullstack Developer, Software Engineer, Senior Software Engineer, Search Engine optimized` },

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

