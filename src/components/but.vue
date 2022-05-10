<template>
  <button class="py-2 px-4 bg-green-200 mr-4" @click="()=>myFunction()">{{name}}</button>
</template>

<script>
export default {
    name: 'but',
    props:{
        name:{
            type: String,
        },
        myFunction:{
            type: Function
        }
    },

}
</script>

<style>

</style>