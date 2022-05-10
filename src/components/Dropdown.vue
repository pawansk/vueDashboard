<template>
<transition name="slide-fade">
     <div>
    <div v-on:click="showDropDown=!showDropDown" class="flex items-center justify-end">
      <div class="pr-2 text-white">{{user}}</div>
      <img src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" alt="avatar" style="width:30px;" class="mr-2">
      <i :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }" class="fa text-white" aria-hidden="true"></i>
    </div>
    <div v-if="showDropDown">
      <ul class="menu mt-4">
        <li v-for="(link, index) in links" :key="index" class="list">
          <a href="#" class="dd-link pointer hover-bg-moon-gray">{{link.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</transition>
</template>

<script>


export default {
name: 'Dropdown ',

  props: {
     user: {
        type: String,
        required: false,
      },
      links: {
        type: Array,
        required: false,
      },
},

  data() {
    return {
      showDropDown: false,

    };
}}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter { 
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
 transform: translateY(-50px);
  opacity: 0; 
}
.menu{
    background-color: #ccc;
    text-align: left;
}
.menu li a{
    padding: 8px 12px;
}

</style>