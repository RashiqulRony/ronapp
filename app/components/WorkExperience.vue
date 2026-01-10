<template>
  <div class="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
    <h3 class="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
      Work Experience
    </h3>

    <div v-if="workExperiences.length > 0" class="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
      <div class="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
        <div v-for="(exp, i) in workExperiences" class="flex flex-col gap-1 md:flex-row md:gap-10">
          <p class="mt-1 text-sm font-medium text-muted dark:text-light/70">
            {{ exp.start_date }}
            <br>to<br>
            {{ exp.end_date }}
          </p>
          <div class="flex items-center gap-3">
            <div class="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
              <img v-if="exp.organization_logo" :src="useRuntimeConfig().public.assetUrl+'/work-experience/'+ exp.organization_logo" :alt="exp.organization" class="h-5 w-5" />
              <img v-else src="@/assets/img/google.svg" alt="" class="h-5 w-5" />
            </div>
            <div class="">
              <h6 class="text-base font-semibold text-dark dark:text-light/70">
                {{ exp.organization }}
              </h6>
              <p class="text-sm text-muted">
                {{ exp.designation }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'WorkExperience',
  data() {
    return {
      workExperiences: []
    }
  },

  mounted() {
    this.getWorkExperiences()
  },

  methods: {
    async getWorkExperiences() {
      const { $axios } = useNuxtApp()
      await $axios.get('/work-experiences').then((response) => {
        this.workExperiences = response.data
      }).catch((error) => {
        console.log(error)
      });
    }
  }
}
</script>