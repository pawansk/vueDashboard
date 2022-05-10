<template>

<div class="flex justify-between items-center w-full pr-10 bg-white h-14 border-b z-30 w-screen transition-position pl-10 lg:w-auto bg-gray-600 dark:border-gray-800 border-gray-100">
<div id="loader">ddd</div>

<button  @click="showModal2" class="text-white">toggle</button>


<div>
<dropdown :links="links2" :user="user2"> </dropdown>
</div>
    </div>
</template>

<script>

import Dropdown from '@/components/Dropdown.vue'
export default {

components: {
    Dropdown,
},

 props: ["showModal2"],
data(){
   return{
       user2: "Anderson",
       //isProfile: false,
                   links2: [
        {
         id: "0", name: "Profile"
        },
        {
         id: "1",  name: "Change Password"
        },
        {
         id: "2",  name: "Logout"
        }
      ],
   }
},
methods:{
    // toggleNav(){
    //     this.isProfile = !this.isProfile
    // }
}
}
</script>
<style scoped>

</style>