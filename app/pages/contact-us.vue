<template>
  Contact Us
</template>

<script>
export default {
  name: 'Contact Us',

  mounted() {

  },

  setup() {
    useHead({
      title: 'RonApp | Contact Us',
      meta: [
        {
          name: 'description',
          content: 'Welcome to my website. This is the home page.'
        },
        {
          name: 'keywords',
          content: 'Nuxt 4, Vue 3, SEO, JavaScript'
        },

        // Open Graph
        { property: 'og:title', content: 'Home | My Website' },
        { property: 'og:description', content: 'Welcome to my website. This is the home page.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://example.com/' },
        { property: 'og:image', content: 'https://example.com/og-image.jpg' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Home | My Website' },
        { name: 'twitter:description', content: 'Welcome to my website. This is the home page.' },
        { name: 'twitter:image', content: 'https://example.com/og-image.jpg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://example.com/' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Home | My Website",
            "url": "https://example.com/"
          })
        }
      ]
    })
  }
}

</script>