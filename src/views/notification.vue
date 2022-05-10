<template>
<div class="flex bg-gray-200 p-4 w-full justify-between">
  <!-- <div >
<div class="flex"><Menu1 /> <Searchbar /></div>
</div>
<div><dropdown :links="links2" :user="user2"> </dropdown></div>
 </div> -->
 </div>
</template>

<script>
// import Menu1 from '@/components/Menu1.vue'
// import Searchbar from '@/components/SerchBar.vue'
// import Dropdown from '@/components/Dropdown.vue'
export default {
components:{

},
   data() {
       return{
         
      //    user2: "User",
      //    links2: [
      //   {
      //    id: "0", name: "Profile"
      //   },
      //   {
      //    id: "1",  name: "Change Password"
      //   },
      //   {
      //    id: "2",  name: "Logout"
      //   }
      // ],
}  },
mounted () {
  document.body.classList.add('bg-light')
  //document.getElementById("searchbar").classList.add('bg-light')
},
unmounted () {
   document.body.classList.remove('bg-light')
  //document.getElementById("searchbar").classList.remove('bg-light')
},

}
</script>

<style>
.bg-light #searchbar{
  display: none;
}
</style>