<template>
<transition name="slide">
    <div class="w-80 bg-gray-500 h-full side2" v-if="!isModalVisible">
        <div class="flex justify-center mb-4 px-2 py-3 bg-gray-600 text-white text-2xl font-semibold">
          VueJs
        </div>
    <ul class="sidebar">
      <li v-for="(side, index) in sides" :key="index"><router-link :to="side.path">{{side.name}}</router-link></li>
    </ul>
    </div>
</transition>
</template>

<script>
import SidebarData from '@/components/SidebarData'
export default {
  name: 'Sidebar',
      props: ["isModalVisible"],
   data() {
       return{
sides: SidebarData
}  },

}
</script>

<style scoped>
.side2{
  height: 100vh;
}
.slide-leave-active,
.fade-enter-active {
  transition: all .1s cubic-bezier(.65, .05, .36, 1);
}
.slide-enter-active,
.fade-leave-active {
  transition: all .1s cubic-bezier(.65, .05, .36, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

.sidebar li{
    width: 100%;
    display: flex;
    font-size: 13px;
    cursor: pointer;
    padding: 16px 25px;
    font-family: sans-serif;
    align-items: flex-start;
    color: #dfdfdf;
    font-weight: 600;
    box-shadow: 0px 1px 1px #00000029;
    border-bottom: solid 1px #ffffff2b;
}
.sidebar li:last-child{
      box-shadow: none;
    border-bottom: transparent;
}
.sidebar li:hover{
        background-color: #7c828d;
        transition: 0.5s all ease;
}
</style>