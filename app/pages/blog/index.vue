<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
    <div class="">
      <h2 class="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
        My Recent Article and Publications
      </h2>
      <p class="mt-4 text-lg text-muted dark:text-light/70">
        I'm here to help if you're searching for a product designer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </p>
    </div>
    <!-- Blog -->
    <BlogGrid limit="10"/>
  </div>
</template>

<script setup>
import {useHead} from "#imports";

/* Store */
const about = computed(() => useAboutStore().data)

/* SEO */
useHead({
  title: `RonApp | Blogs`,
  meta: [
    {
      name: 'description',
      content: `${about.value.about} & Blogs`
    },
    {
      name: 'keywords',
      content: `${about.value.name}, ${about.value.tagline}, ${about.value.name}'s Blogs, Web and App Developer, 8 years experience, Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter, React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, Fullstack Developer, Software Engineer, Senior Software Engineer, Search Engine optimized`
    },

    // Open Graph
    { property: 'og:title', content: `Blogs | ${about.value.name}`},
    { property: 'og:description', content: `${about.value.about}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://ronapp.page.gd/' },

    // Twitter
    { name: 'twitter:card', content: import('@/assets/img/profile.png') },
    { name: 'twitter:title', content: `Blogs | ${about.value.name}` },
    { name: 'twitter:description', content: `${about.value.about}` },
    { name: 'twitter:image', content: import('@/assets/img/profile.png') }
  ],
  link: [
    { rel: 'canonical', href: `https://ronapp.page.gd/blog` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": `https://ronapp.page.gd/blog`,
        "@type": "WebPage",
        "name": `About | ${about.value.name}`,
        "url": `https://ronapp.page.gd/blog`
      })
    }
  ]
})


</script>