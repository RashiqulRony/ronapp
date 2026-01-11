<template>
  <div class="grid grid-cols-1 gap-4 lg:gap-6">
    <!-- Work Experience -->
    <WorkExperience />
    <!-- Expertise -->
    <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
      <h3 class="text-2xl font-semibold dark:text-light">My Expert Area</h3>
      <Skills :limit="12"/>
    </div>
  </div>
  <!-- Projects -->
  <Projects :limit="2" />
  <!-- Services -->
  <Services :limit="4" />

  <!-- Contact -->
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
    <marquee behavior="scroll" direction="left" class="overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
      Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀
      Crafting Digital Experiences 🎨
    </marquee>

    <h2 class="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
      Let's👋 <br />
      Work Together
    </h2>

    <a href="contact.html" class="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
      <span>Let's Talk</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-5 w-5">
        <path d="M17.5 11.667v-5h-5" />
        <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
      </svg>
    </a>
  </div>
</template>

<script>
import Skills from "@/components/home/Skills.vue";
import WorkExperience from "@/components/home/WorkExperience.vue";
import Services from "@/components/home/Services.vue";
import Projects from "@/components/home/Projects.vue";

export default {
  name: 'Home',
  components: {Projects, Services, Skills, WorkExperience},
  data() {
    return {
    }
  },
  mounted() {
  },

  methods: {

  },

  computed: {
    about() {
      return useAboutStore().data
    },
    loading() {
      return useAboutStore().loading
    },
  },

  setup() {
    useHead({
      title: 'RonApp - Web & App Solutions',
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
