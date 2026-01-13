<template>
  <div class="group overflow-hidden rounded-lg bg-light dark:bg-dark-2">
    <div class="skill-track" :class="directionClass">
      <div class="skill-set">

        <div v-for="skill in skills" :key="'a-' + skill.id" class="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
          <div class="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
            <img :src="useRuntimeConfig().public.assetUrl+'/skill/'+ skill.logo" :alt="skill.title" class="w-8">
          </div>
          <p class="mt-3 text-base font-medium text-dark dark:text-light/70">
            {{ limitText(skill.title, 10) }}
          </p>
        </div>
      </div>
      <div class="skill-set">
        <div v-for="skill in skills" :key="'a-' + skill.id" class="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
          <div class="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
            <img :src="useRuntimeConfig().public.assetUrl+'/skill/'+ skill.logo" :alt="skill.title" class="w-8">
          </div>
          <p class="mt-3 text-base font-medium text-dark dark:text-light/70">
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
