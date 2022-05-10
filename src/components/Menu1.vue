<template>
<ul>
  <li v-for="menu in menus2" :key="menu.id" class="inline-block px-6 py-1"><router-link :to="menu.path">{{menu.name}}</router-link></li>
</ul>
</template>

<script>
import menuData from '@/components/menuData';
export default {
name: 'Menu1',
components:{

},
   data() {
return{
    menus2: menuData
}  },
}
</script>
