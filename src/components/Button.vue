<template>
   <div>
    <button class="" @click="myFunction()" :class="darkMode ? 'dark-theme' : 'light-theme'">{{name}}</button>   
    </div> 
</template>

<script>


export default {
name: 'Button',
props: {
name: {
    type: String,
    default: 'Button',
     },

     darkMode: {
         type: Boolean,
         //default: true
     },
     myFunction: {
         type: Function,
     }
},

}
</script>


<style scoped>
.dark-theme{
    background-color: #000;
    color: #fff;
    border:solid 1px #ccc;
    padding: 5px 15px;
    border-radius: 4px;
}
.light-theme{
    background-color: #fff;
    color: #000;
    border:solid 1px #ccc;
    padding: 5px 15px;
    border-radius: 4px;
}
</style>