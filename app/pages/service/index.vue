<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
    <div class="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
      <div class="">
        <h2 class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
          Services I <span class="text-primary">Offered</span>
        </h2>
        <p class="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
          Transforming Ideas into Innovative Reality, Elevate Your Vision with
          Our Expert
          <span class="font-semibold text-dark dark:text-white">
            Product Design and Development
          </span>
          Services!
        </p>
      </div>
      <div class="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
        <span class="relative flex h-2 w-2 shrink-0">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
        </span>
        <span>Available For Hire</span>
      </div>
    </div>

    <!-- Service cards -->
    <div class="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:mt-14">
      <NuxtLink v-for="service in services" :to="'/service/' + service?.slug" :key="'ser'+service.id" class="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
        <div class="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
          <img :src="useRuntimeConfig().public.assetUrl+'/service/'+ service?.icon" :alt="service?.title">
        </div>
        <p class="mt-3 text-base font-medium text-dark dark:text-light/70">
          {{ service?.title }}
        </p>
      </NuxtLink>
    </div>

    <!-- Brands -->
    <div class="mt-10 lg:mt-14">
      <h3 class="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
        Working With {{ skills.length }}+ Technologies
      </h3>
      <div v-if="skills.length > 0" class="mt-8 space-y-6">
        <SkillsSlider :skills="skills" direction="rtl" />
        <SkillsSlider :skills="skills" direction="ltr" />
      </div>
    </div>

  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead, useNuxtApp } from '#imports'
const { $axios } = useNuxtApp()

/* State */
const skills = ref([])
const services = ref([])

/* Store */
const about = computed(() => useAboutStore().data)

const getServices = async () => {
  try {
    const response = await $axios.get('/services')
    services.value = response.data
  } catch (error) {
    console.log(error)
  }
}
const getSkills = async () => {
  try {
    const response = await $axios.get('/skills')
    skills.value = response.data
  } catch (error) {
    console.log(error)
  }
}

/* Lifecycle */
onMounted(() => {
  getServices()
  getSkills()
})


/* SEO */
useHead({
  title: `RonApp | Service`,
  meta: [
    {
      name: 'description',
      content: `${about.value.about} & Provide Service`
    },
    {
      name: 'keywords',
      content: `${about.value.name}, ${about.value.tagline}, ${about.value.name}'s Service, Web and App Developer, 8 years experience, Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter, React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, Fullstack Developer, Software Engineer, Senior Software Engineer, Search Engine optimized`
    },

    // Open Graph
    { property: 'og:title', content: `Service | ${about.value.name}`},
    { property: 'og:description', content: `${about.value.about}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://ronapp.page.gd/' },

    // Twitter
    { name: 'twitter:card', content: import('@/assets/img/profile.png') },
    { name: 'twitter:title', content: `Service | ${about.value.name}` },
    { name: 'twitter:description', content: `${about.value.about}` },
    { name: 'twitter:image', content: import('@/assets/img/profile.png') }
  ],
  link: [
    { rel: 'canonical', href: `https://ronapp.page.gd/about` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": `https://ronapp.page.gd/about`,
        "@type": "WebPage",
        "name": `About | ${about.value.name}`,
        "url": `https://ronapp.page.gd/about`
      })
    }
  ]
})
</script>
