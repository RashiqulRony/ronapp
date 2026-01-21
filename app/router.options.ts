import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        const mainContent = document.getElementById('mainContent')
        if (mainContent) {
            mainContent.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
