export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    runtimeConfig: {
        public: {
            apiUrl: process.env.NUXT_PUBLIC_API_URL,
            assetUrl: process.env.NUXT_PUBLIC_ASSET_URL,
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL
        }
    },
    modules: [
        '@pinia/nuxt'
    ],
    devtools: { enabled: true },
    components: true,
    css: [
        '~/assets/css/style.css',
        '~/assets/css/swiper-bundle.min.css',
        '~/assets/css/venobox.min.css',
        '~/assets/css/main.css',
    ],

    app: {
        head: {
            title: 'RonApp - Web & App Solutions',
            meta: [
                { name: 'description', content: 'I am a Web and App Developer expert with over 8+ years experience in setup of Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter and React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, I have created meany Web Application & Websites, most of which required custom designed plugins, extensions, and themes. My aim has always been to produce websites that look beautiful and professional, are highly functional, load quickly, and are Search Engine optimized.' },
                { name: 'keywords', content: 'Web and App Developer, 8 years experience, Laravel, Codeigniter, Vue Js, React JS, Angular, Flutter, React Native, Object Oriented-PHP, JavaScript, Bootstrap and other platforms. Till date, Fullstack Developer, Software Engineer, Senior Software Engineer, Search Engine optimized.' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' }
            ],
            script: [
                { src: '/js/preline.js', defer: true },
                { src: '/js/swiper-bundle.min.js', defer: true },
                { src: '/js/venobox.min.js', defer: true },
                { src: '/js/clipboard.min.js', defer: true },
                { src: '/js/appmain.js', defer: true }
            ],
        }
    }
})