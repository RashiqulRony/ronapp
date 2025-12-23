<template>
  <div class="shapes">
    <div class="fixed -left-1/2 -top-1/2 -z-10 animate-spin-very-slow xl:-left-[20%] xl:-top-1/3">
      <img src="@/assets/img/gradient-1.png" alt="" class="" />
    </div>

    <div class="fixed -right-[50%] top-[10%] -z-10 animate-spin-very-slow xl:-right-[15%] xl:top-[10%]">
      <img src="@/assets/img/gradient-2.png" alt="" class="" />
    </div>

    <div class="move-with-cursor fixed left-[10%] top-[20%] -z-10">
      <img src="@/assets/img/object-3d-1.png" alt="" class="" />
    </div>

    <div class="move-with-cursor fixed bottom-[20%] right-[10%] -z-10">
      <img src="@/assets/img/object-3d-2.png" alt="" class="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shapes',

}
</script>