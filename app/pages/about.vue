<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
    <div class="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
      <div class="">
        <h2 class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
          Hi, This Is <span class="text-primary">{{ about?.name }}</span> 👋
        </h2>
        <p class="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
          A Passionate
          <span class="font-semibold text-dark dark:text-white">{{ about?.tagline }}</span>
        </p>
        <p class="mt-4 text-lg text-muted dark:text-light">
          {{ about?.short_description }}
        </p>
        <p class="mt-4 text-lg text-muted dark:text-light">
          {{ about?.about }}
        </p>
      </div>
    </div>

    <div class="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10">
      <div class="flex flex-wrap items-start gap-6 lg:gap-10">
        <div class="">
          <h2 class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
            <span>{{ about?.year_of_experience }}</span>+
          </h2>
          <p class="mt-2 text-muted">Year of Experience</p>
        </div>
        <div class="">
          <h2 class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
            <span>{{ about?.project_completed }}</span>+
          </h2>
          <p class="mt-2 text-muted">Project Completed</p>
        </div>
        <div class="">
          <h2 class="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
            <span>{{ about?.happy_client }}</span>+
          </h2>
          <p class="mt-2 text-muted">Happy Client</p>
        </div>
      </div>

      <div class="relative -mt-6 hidden h-[100px] w-[100px] p-4 lg:block xl:-mt-10">
        <img src="@/assets/img/circle-text.svg" alt="" class="absolute inset-0 h-full w-full animate-spin-slow dark:hidden" />
        <img src="@/assets/img/circle-text-light.svg" alt="" class="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block" />
        <div class="grid h-full w-full place-content-center rounded-full bg-primary text-light">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-10 w-10">
            <path d="M20 5v30m-5-5 5 5 5-5" />
          </svg>
        </div>
      </div>
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

    <!-- Reviews -->
    <div class="mt-10 lg:mt-14">
      <div class="flex flex-wrap items-center justify-between gap-6">
        <h3 class="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
          Trusted By 1200+ Clients
        </h3>

        <div class="flex items-center gap-2">
          <button class="review-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-5 w-5 shrink-0">
              <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5" />
            </svg>
          </button>
          <button class="review-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-5 w-5 shrink-0">
              <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5" />
            </svg>
          </button>
        </div>
      </div>
      <div class="mt-8">
        <div class="swiper review-carousel">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                <div class="flex flex-wrap items-center justify-between gap-4">
                  <!-- stars -->
                  <div class="flex flex-wrap items-center gap-1">
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                  </div>

                  <a href="#" class="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                    <span>framer.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 shrink-0">
                      <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                    </svg>
                  </a>
                </div>

                <blockquote class="mt-6 flex-1 text-lg">
                  "We've been using BentoFolio for over a year now,
                  and I must say, it's been a game-changer for us. The
                  user interface is intuitive and the feature.
                </blockquote>

                <p class="mt-8 font-medium">
                  Oliver Clain -
                  <span class="font-normal text-muted">
													Product Designer
												</span>
                </p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                <div class="flex flex-wrap items-center justify-between gap-4">
                  <!-- stars -->
                  <div class="flex flex-wrap items-center gap-1">
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                  </div>

                  <a href="#" class="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                    <span>framer.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 shrink-0">
                      <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                    </svg>
                  </a>
                </div>

                <blockquote class="mt-6 flex-1 text-lg">
                  "We've been using BentoFolio for over a year now,
                  and I must say, it's been a game-changer for us. The
                  user interface is intuitive and the feature.
                </blockquote>

                <p class="mt-8 font-medium">
                  Oliver Clain -
                  <span class="font-normal text-muted">
													Product Designer
												</span>
                </p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                <div class="flex flex-wrap items-center justify-between gap-4">
                  <!-- stars -->
                  <div class="flex flex-wrap items-center gap-1">
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                    <img src="@/assets/img/star-full.svg" alt="" class="h-4 w-4 shrink-0" />
                  </div>

                  <a href="#" class="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                    <span>framer.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 shrink-0">
                      <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                    </svg>
                  </a>
                </div>

                <blockquote class="mt-6 flex-1 text-lg">
                  "We've been using BentoFolio for over a year now,
                  and I must say, it's been a game-changer for us. The
                  user interface is intuitive and the feature.
                </blockquote>

                <p class="mt-8 font-medium">
                  Oliver Clain -
                  <span class="font-normal text-muted">
													Product Designer
												</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Awards -->
    <div class="mt-10 lg:mt-14" v-if="trainings.length > 0">
      <h3 class="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
        Professional Training
      </h3>

      <div class="mt-8 space-y-4">
        <div v-for="training in trainings" :key="'tng'+training.id" class="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
          <div class="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
            <div class="">
              <h5 class="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                {{ training?.topic }}
              </h5>
              <p class="text-muted">Institute: {{ training?.institute }}</p>
            </div>
          </div>

          <div class="flex items-center gap-1.5">
            <h5 class="font-medium leading-tight text-dark dark:text-light">
              Duration: {{ training?.duration }}
            </h5>
          </div>

          <div class="text-right">
            {{ training?.location }}
          </div>
        </div>
      </div>
    </div>

    <!-- Blog -->
    <div class="mt-10 lg:mt-14">
      <div class="flex flex-wrap items-center justify-between gap-6">
        <h3 class="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
          Article and Publications
        </h3>

        <div class="flex items-center gap-2">
          <button class="blog-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-5 w-5 shrink-0">
              <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5" />
            </svg>
          </button>
          <button class="blog-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-5 w-5 shrink-0">
              <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5" />
            </svg>
          </button>
        </div>
      </div>

      <div class="mt-8">
        <div class="swiper blog-carousel">
          <div class="swiper-wrapper">
            <BlogGrid limit="5" slide="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead, useNuxtApp } from '#imports'

/* State */
const skills = ref([])
const trainings = ref([])


/* Store */
const about = computed(() => useAboutStore().data)

/* Axios */
const { $axios } = useNuxtApp()

/* Methods */
const getSkills = async () => {
  try {
    const response = await $axios.get('/skills')
    skills.value = response.data
  } catch (error) {
    console.log(error)
  }
}

const getTrainings = async () => {
  try {
    const response = await $axios.get('/trainings')
    trainings.value = response.data
  } catch (error) {
    console.log(error)
  }
}

/* Lifecycle */
onMounted(() => {
  getSkills()
  getTrainings()
})

/* SEO */
useHead({
  title: `About | ${about.value.name}`,
  meta: [
    {
      name: 'description',
      content: `${about.value.about}`
    },
    {
      name: 'keywords',
      content: `${about.value.name}, ${about.value.tagline}, ${about.value.name}'s About, Web and App Developer, 8 years experience, Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter, React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, Fullstack Developer, Software Engineer, Senior Software Engineer, Search Engine optimized`
    },

    // Open Graph
    { property: 'og:title', content: `About | ${about.value.name}`},
    { property: 'og:description', content: `${about.value.about}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://ronapp.page.gd/' },

    // Twitter
    { name: 'twitter:card', content: import('@/assets/img/profile.png') },
    { name: 'twitter:title', content: `About | ${about.value.name}` },
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
