<template>
  <div class="relative h-screen overflow-y-auto overflow-x-hidden text-dark dark:bg-dark-2 dark:text-light" id="mainContent">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useAboutStore } from '@/stores/about'

const aboutStore = useAboutStore()

await aboutStore.fetchAbout()
</script>