import axios from 'axios'

export default defineNuxtPlugin(() => {
    const api = axios.create({
        baseURL: useRuntimeConfig().public.apiUrl,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })

    return {
        provide: {
            axios: api,
        },
    }
})