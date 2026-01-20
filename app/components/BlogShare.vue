<template>
  <div class="flex flex-wrap items-center gap-5">
    <h6 class="text-lg font-medium text-dark dark:text-light">Share:</h6>
    <div class="flex flex-wrap items-center gap-2">
      <!-- Facebook -->
      <a
          :href="facebookUrl"
          target="_blank"
          rel="noopener"
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-slate-600 transition hover:text-primary dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
      >
        <!-- Facebook SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10Z"/>
        </svg>
      </a>

      <!-- Twitter / X -->
      <a
          :href="twitterUrl"
          target="_blank"
          rel="noopener"
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-slate-600 transition hover:text-primary dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
      >
        <!-- Twitter SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
      </a>

      <!-- LinkedIn -->
      <a
          :href="linkedinUrl"
          target="_blank"
          rel="noopener"
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-slate-600 transition hover:text-primary dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
      >
        <!-- LinkedIn SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
      </a>

      <!-- WhatsApp -->
      <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener"
          class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-slate-600 transition hover:text-primary dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
      >
        <!-- WhatsApp SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>

    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute, useRuntimeConfig } from '#imports'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const route = useRoute()
const config = useRuntimeConfig()

/* Full blog URL */
const pageUrl = computed(() =>
    `${config.public.siteUrl}${route.fullPath}`
)

const encodedUrl = computed(() => encodeURIComponent(pageUrl.value))
const encodedTitle = computed(() => encodeURIComponent(props.title))

/* Share URLs */
const facebookUrl = computed(() =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl.value}`
)

const twitterUrl = computed(() =>
    `https://twitter.com/intent/tweet?url=${encodedUrl.value}&text=${encodedTitle.value}`
)

const linkedinUrl = computed(() =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl.value}`
)

const whatsappUrl = computed(() =>
    `https://wa.me/?text=${encodedTitle.value}%20${encodedUrl.value}`
)
</script>