<template>
  <div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-2" v-if="features.length > 0">
    <div v-for="(feature, fk) in features" :key="fk" class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
      <figure class="text-center">
        <img :src="useRuntimeConfig().public.assetUrl+'/service-feature/icon/'+ feature.icon" :alt="feature.title" width="100" />
      </figure>
      <h3 class="mt-4 text-xl font-medium dark:text-light">{{ feature.title }}</h3>
      <p class="text-muted">{{ feature.description }}</p>
    </div>
  </div>
</template>


<script setup>

/* Props */
const props = defineProps({
  features: {
    type: Array,
    default: []
  }
})

</script>