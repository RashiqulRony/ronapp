<template>
  <div class="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
    <div class="">
      <h2 class="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
        Let's 👋 <span class="text-primary">Work</span> Together
      </h2>
      <p class="mt-4 text-lg text-muted dark:text-light/70">
        I'm here to help if you're searching for a product designer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </p>
      <!-- CTA buttons -->
      <div class="mt-6 flex flex-wrap gap-2">
        <a href="#" class="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-6 w-6">
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
          </svg>
          <span>Book A Call</span>
        </a>
        <button type="button" data-clipboard-text="shams.sujon.01@gmail.com" data-clipboard-action="copy" data-clipboard-success-text="Copied to clipboard" class="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-6 w-6">
            <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
          </svg>
          <span>Copy Email</span>

          <span
              class="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
              role="tooltip">
									Copied to clipboard
								</span>
        </button>
      </div>
    </div>

    <div class="mt-10 lg:mt-14">
      <form id="contact-form" method="post" action="https://marveltheme.com/tf/html/bentofolio-preview/assets/php/contact_email.php" class="space-y-6 rounded-lg bg-light p-6 dark:bg-dark-2 xl:p-12">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="">
            <label for="name" class="mb-2 block text-sm font-medium text-dark dark:text-light">
              Name
            </label>
            <input required type="text" id="name" name="name" placeholder="Enter your name" class="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20" />
          </div>
          <div class="">
            <label for="email" class="mb-2 block text-sm font-medium text-dark dark:text-light">
              Email
            </label>
            <input required type="email" id="email" name="email" placeholder="Enter your email" class="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20" />
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="">
            <label for="subject" class="mb-2 block text-sm font-medium text-dark dark:text-light">
              Subject
            </label>
            <input required type="text" id="subject" name="subject" placeholder="Subject" class="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20" />
          </div>

          <div class="">
            <label for="budget" class="mb-2 block text-sm font-medium text-dark dark:text-light">
              Budget
            </label>
            <div class="relative">
              <select class="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20" id="budget" name="budget" required>
                <option value="">Choose</option>
                <option>$5000</option>
                <option>$5000 - $10000</option>
                <option>$10000 - $20000</option>
                <option>$20000+</option>
              </select>

              <div class="absolute end-3 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 flex-shrink-0">
                  <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <label for="message" class="mb-2 block text-sm font-medium text-dark dark:text-light">
            Message
          </label>

          <textarea required id="message" name="message" placeholder="Type details about your inquiry" rows="4" class="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20"></textarea>
        </div>

        <button type="submit" class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 text-center font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
          <span>Send Message</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class="h-5 w-5">
            <path d="M17.5 11.667v-5h-5" />
            <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <div class="status alert hidden"></div>
      </form>
    </div>
  </div>
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