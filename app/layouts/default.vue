<template>
  <div class="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 p-4 lg:gap-6 lg:p-6">
    <!-- Header -->
    <Header />
    <main class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      <!-- Intro -->
      <IntroBox />
      <slot/>
    </main>
    <Footer />
  </div>

  <Shapes />
</template>
<script setup lang="ts">

</script>