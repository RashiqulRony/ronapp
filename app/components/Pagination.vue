<template>
  <nav v-if="links?.length > 3" class="mt-10 flex items-center justify-center gap-1.5">
    <template v-for="(link, index) in links" :key="index">
      <!-- Disabled -->
      <span v-if="link.url === null"></span>

      <!-- Button -->
      <button
          v-else
          type="button"
          @click="pageChange(link.label)"
          class="inline-flex min-h-9 min-w-9 items-center justify-center rounded-lg border
               border-light text-dark transition
               hover:border-primary hover:text-primary
               focus:outline-none focus:ring-2
               dark:border-dark dark:text-muted dark:hover:border-primary dark:hover:text-primary"
          :class="{
          'bg-primary text-white border-primary hover:text-white':
            link.active
        }"
          :aria-current="link.active ? 'page' : null"
      >
        <!-- Previous -->
        <svg
            v-if="link.label.includes('Previous')"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>

        <!-- Next -->
        <svg
            v-else-if="link.label.includes('Next')"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="h-4 w-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>

        <!-- Page Number -->
        <span v-else v-html="link.label"></span>
      </button>
    </template>
  </nav>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['changepage'])

function pageChange(page) {
  if (page === 'Next &raquo;' || page === 'Next') {
    page = props.currentPage + 1
  } else if (page === '&laquo; Previous' || page === 'Previous') {
    page = props.currentPage - 1
  }
  emit('changepage', page)
}
</script>
