<template>
  <div v-if="loading" class="loader-container" :class="{backdrop: backdrop}">
    <!-- <BeatLoader :loading="loading" color="#186EA8"/> --><h1>Loader...</h1>
  </div>
</template>

<script>
  export default {
    name: 'Loader',
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      backdrop: {
        type: Boolean,
        default: false
      },
    }
  };
</script>

<style scoped>
  .loader-container {
    @apply w-full h-full absolute flex justify-center items-center z-50 inset-0
  }

  .backdrop {
    backdrop-filter: blur(1px);
    background: rgba(255, 255, 255, 0.8);
  }
</style>
