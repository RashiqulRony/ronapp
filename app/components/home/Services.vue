<template>
  <div v-if="services" class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <h3 class="text-2xl font-semibold dark:text-light">Services I Offered</h3>
      <NuxtLink to="/service" class="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
        <span>See All Services</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-5 w-5">
          <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
        </svg>
      </NuxtLink>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
      <NuxtLink v-for="(service, svk) in services.data" :to="'/service/' + service?.slug" class="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4" :key="svk">
        <div class="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
          <img :src="useRuntimeConfig().public.assetUrl+'/service/icon/'+ service.icon" :alt="service.title">
        </div>
        <p class="mt-3 text-base font-medium text-dark dark:text-light/70">
          {{ limitText(service.title, 15) }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Services',

  props: {
    limit: {
      type: Number,
      default: 10
    }
  },

  data() {
    return {
      services: []
    }
  },

  mounted() {
    this.getServices()
  },

  methods: {
    async getServices() {
      const { $axios } = useNuxtApp()
      await $axios.get('/services?limit='+this.limit).then((response) => {
        this.services = response.data
      }).catch((error) => {
        console.log(error)
      });
    },
    limitText(text, limit) {
      return text.length > limit
          ? text.slice(0, limit) + '...'
          : text
    }
  }
}
</script>