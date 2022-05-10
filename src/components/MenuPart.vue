<template>
<div>

  <div class="px-6 py-2 inline-block bg-gray-100 w-full" v-on:click="menuShow = !menuShow">
      <ul>
          <li v-for="(menu, index) in menus" :key="index" class="inline-block px-6 py-2">
              </li>
      </ul>


  </div>



  <div v-if="menuShow">
      <ul>
          <li v-for="(item, index) in items" :key="index">
              <div>{{item.name}}</div>
          </li>
      </ul>
      </div>



  </div>
</template>

<script>
export default {
name : 'MenuPart',
props: {

    menus:{
        type: Array,
        require : false
    },
    items: {
        type : Array,
        require : false
    }
},
data() {
    return{
        menuShow: false
    }
},

methods:{

}
}
</script>

<style>

</style>