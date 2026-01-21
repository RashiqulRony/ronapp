<template>
  <div class="grid grid-cols-1 gap-4 lg:gap-6">
    <!-- Work Experience -->
    <WorkExperience />
    <!-- Expertise -->
    <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
      <h3 class="text-2xl font-semibold dark:text-light">My Expert Area</h3>
      <Skills :limit="12"/>
    </div>
  </div>
  <!-- Projects -->
  <Projects :limit="2" />
  <!-- Services -->
  <Services :limit="4" />

  <!-- Contact -->
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
    <marquee behavior="scroll" direction="left" class="overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
      ▶ Web and App Developer
      ▶ 8 years experience
      ▶ Laravel
      ▶ Codeigniter
      ▶ Vue Js
      ▶ Nuxt Js
      ▶ React JS
      ▶ Angular
      ▶ Flutter
      ▶ React Native
      ▶ Object Oriented-PHP
      ▶ JavaScript
      ▶ Bootstrap and other platforms.
      ▶ Docker & Kubernetes
      ▶ Search Engine optimized.
      ▶ GitHub
      ▶ GitLab
      ▶ Bitbucket
      ▶ AWS
      ▶ Digital Ocean
      ▶ Vercel
      ▶ Netlify
      ▶ Firebase
      ▶ Stripe
      ▶ Paypal
      ▶ Shopify
      ▶ WooCommerce
      ▶ Magento
      ▶ PrestaShop
      ▶ Shopify
      ▶ BigCommerce
      ▶ Shopify
    </marquee>

    <h2 class="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
      Let's👋 <br />
      Work Together
    </h2>

    <NuxtLink to="/contact-us" class="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
      <span>Let's Talk</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-5 w-5">
        <path d="M17.5 11.667v-5h-5" />
        <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
      </svg>
    </NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  scrollToTop: true
})

import Skills from '@/components/home/Skills.vue'
import WorkExperience from '@/components/home/WorkExperience.vue'
import Services from '@/components/home/Services.vue'
import Projects from '@/components/home/Projects.vue'
</script>
