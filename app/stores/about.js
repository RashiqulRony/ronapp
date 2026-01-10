import {defineStore} from 'pinia'

export const useAboutStore = defineStore('about', {
    state: () => ({
        data: null,
        loading: false,
        error: null,
    }),

    actions: {
        async fetchAbout() {
            if (this.data) return
            this.loading = true
            this.error = null

            try {
                this.data = await $fetch(useRuntimeConfig().public.apiUrl+'/about')
            } catch (err) {
                this.error = err
            } finally {
                this.loading = false
            }
        },
    },
})
