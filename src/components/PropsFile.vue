<template>
  <div>
    <p class="inline-block mt-10" :class="darkMode ? 'dark-theme' : 'light-theme'" @click="myFunction()">
      {{ myButton }}
    </p>
  </div>
</template>

<script>
export default {
  name: "PropsFile",
  props: {
    myButton: {
      type: String,
      default: "Button",
    },
    myFunction: {
      type: Function,
    },

    darkMode: {
      type: Boolean,
      //default : true
    },
  },
};
</script>     

<style scoped>
.light-theme {
  padding: 8px 20px;
  color: #fff;
  background-color: green;
}

.dark-theme {
  padding: 8px 20px;
  color: #fff;
  background-color: red;
}
</style>