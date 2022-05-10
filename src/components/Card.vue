<template>
  <div class="card w-auto rounded-lg bg-gray-100 m-8 p-4">
    <div class="card-image">
      <slot name="image"></slot>
    </div>

    <div class="card-header">
      <div class="card-title h5">
        <slot name="title"></slot>
      </div>
      <div class="card-subtitle text-gray">
        <slot name="subtitle"></slot>
      </div>
    </div>

    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer mt-4">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>


export default {
 name: 'Card'
}
</script>

<style scoped>

</style>

