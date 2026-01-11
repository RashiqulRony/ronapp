<template>
  <div v-if="skills.data" class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
    <div class="text-center" v-for="(skill, sk) in skills.data" :key="sk">
      <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
        <img :src="useRuntimeConfig().public.assetUrl+'/skill/'+ skill.logo" :alt="skill.title" class="h-10 w-10" />
      </div>
      <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
        {{ limitText(skill.title, 10) }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Skills',

  props: {
    limit: {
      type: Number,
      default: 10
    }
  },

  data() {
    return {
      skills: []
    }
  },

  mounted() {
    this.getSkills()
  },

  methods: {
    async getSkills() {
      const { $axios } = useNuxtApp()
      await $axios.get('/skills?limit='+this.limit).then((response) => {
        this.skills = response.data
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