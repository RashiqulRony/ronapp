<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
    <div class="">
      <h2 class="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
        Check Out My Latest <span class="text-primary">Projects</span>
      </h2>
      <p class="mt-4 text-lg text-muted dark:text-light/70">
        I'm here to help if you're searching for a product designer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </p>
    </div>

    <!-- Portfolio -->
    <div class="mt-10 lg:mt-14">
      <div class="mt-6 space-y-6">

        <div v-for="portfolio in portfolios.data" class="">
          <div class="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0">
            <div class="relative aspect-6/4 overflow-hidden rounded-t-lg">
              <img :src="useRuntimeConfig().public.assetUrl+'/portfolio/'+ portfolio.image" :alt="portfolio.title"  class="h-full w-full rounded-t-lg object-cover object-top transition" />
              <NuxtLink :to="'/portfolio/'+ portfolio.slug" data-gall="project-gallry-1" class="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-6 w-6">
                  <path d="M10 4.167v11.666M4.167 10h11.666" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <div class="flex flex-wrap items-start justify-between py-4 md:p-6">
            <div class="">
              <h3 class="text-lg font-medium md:text-xl lg:text-2xl">
                <a href="#" class="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary">
                  {{ portfolio.title }}
                </a>
              </h3>
              <p class="text-sm text-muted lg:text-base">
                {{ portfolio.short_description }}

                <a v-if="portfolio.site_link" :href="portfolio.site_link" target="_blank" class="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary">
                  <span>Visit Site</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0">
                    <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Pagination -->
      <Pagination v-if="portfolios.links"
                  :links="portfolios.links"
                  :currentPage="portfolios.current_page"
                  :from="portfolios.from" :to="portfolios.to"
                  :total="portfolios.total"
                  v-on:changepage="getPortfolios($event)"  />
      <!-- End Pagination -->
    </div>

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
const portfolios = ref([])
const skills = ref([])
/* Store */
const about = computed(() => useAboutStore().data)

const getPortfolios = async (page = 1) => {
  try {
    const response = await $axios.get(`/portfolios?limit=3&page=${page}`)
    portfolios.value = response.data
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
  getPortfolios()
  getSkills()
})

/* SEO */
useHead({
  title: `RonApp | Portfolios`,
  meta: [
    {
      name: 'description',
      content: `${about.value.about} & Portfolios`
    },
    {
      name: 'keywords',
      content: `${about.value.name}, ${about.value.tagline}, ${about.value.name}'s Portfolios, Web and App Developer, 8 years experience, Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter, React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, Fullstack Developer, Software Engineer, Senior Software Engineer, Search Engine optimized`
    },

    // Open Graph
    { property: 'og:title', content: `Portfolios | ${about.value.name}`},
    { property: 'og:description', content: `${about.value.about}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://ronapp.page.gd/' },

    // Twitter
    { name: 'twitter:card', content: import('@/assets/img/profile.png') },
    { name: 'twitter:title', content: `Portfolios | ${about.value.name}` },
    { name: 'twitter:description', content: `${about.value.about}` },
    { name: 'twitter:image', content: import('@/assets/img/profile.png') }
  ],
  link: [
    { rel: 'canonical', href: `https://ronapp.page.gd/portfolio` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": `https://ronapp.page.gd/portfolio`,
        "@type": "WebPage",
        "name": `About | ${about.value.name}`,
        "url": `https://ronapp.page.gd/portfolio`
      })
    }
  ]
})

</script>