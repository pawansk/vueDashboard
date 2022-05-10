<template>
<div id="searchbar" :class="hiddenClass ? 'show' : 'hide'">
<input type="text" class="bg-white py-2 px-2 ml-12">
</div>
</template>

<script>
export default {
name: 'Searchbar',
props:{
     hiddenClass: {
         type: Boolean,
         //default: true
     },
},
data(){
    return{
//boolVar: true
    }
}
}
</script>

<style>

</style>