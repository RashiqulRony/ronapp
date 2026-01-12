<template>
  <div class="group overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2">
    <div class="skill-track" :class="directionClass">
      <div class="skill-set">
        <div class="text-center" v-for="skill in skills" :key="'a-' + skill.id">
          <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img :src="useRuntimeConfig().public.assetUrl+'/skill/'+ skill.logo" :alt="skill.title" class="h-10 w-10 skill-logo"  />
          </div>
          <p class="text-base font-medium text-dark dark:text-light/70" style="text-transform: capitalize">
            {{ limitText(skill.title, 10) }}
          </p>
        </div>

      </div>
      <div class="skill-set">
        <div class="text-center" v-for="skill in skills" :key="'a-' + skill.id">
          <div class="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
            <img :src="useRuntimeConfig().public.assetUrl+'/skill/'+ skill.logo" :alt="skill.title" class="h-10 w-10 skill-logo"  />
          </div>
          <p class="mt-1 text-base font-medium text-dark dark:text-light/70">
            {{ limitText(skill.title, 10) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skills: Array,
  direction: {
    type: String,
    default: 'rtl'
  }
})
const config = useRuntimeConfig()
const assetUrl = config.public.assetUrl
const directionClass = props.direction === 'ltr' ? 'scroll-ltr' : 'scroll-rtl'
const limitText = (text, limit) => {
  return text.length > limit
      ? text.slice(0, limit) + '...'
      : text
}
</script>
