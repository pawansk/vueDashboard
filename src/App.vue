<template>
<loader :loading="loading" :backdrop="true" />
  <div class="flex">

    <div>
     <Sidebar :isModalVisible="OpenDialog" />
    </div>
<!-- flex items-center flex-col items-stretch w-full -->
    <div class="flex flex-col items-stretch w-full">
      <!-- <div><Topbar  :showModal2="showModal" /></div> -->



<div class="flex bg-gray-200 p-4 w-full justify-between mb-10">
  <div >
<div class="flex"><Menu1 /> <Searchbar /></div>
</div>
<div><dropdown :links="links2" :user="user2"> </dropdown></div>
 </div>



       <div class="pl-10"> <router-view/></div>
    </div>

  </div>


</template>


<script>
import Loader from '@/components/Loader.vue'
import Sidebar from '@/components/Sidebar.vue'
//import Topbar from '@/components/Topbar.vue'
import Menu1 from '@/components/Menu1.vue'
import Searchbar from '@/components/SerchBar.vue'
import Dropdown from '@/components/Dropdown.vue'
export default {
 components: {
Sidebar, Menu1, Searchbar, Dropdown, Loader
  },
  props:{
  //  shows: Boolean
  },
  data() {
    return {
      loading: true,
      OpenDialog: false,
        user2: "User",
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
    };
  },
mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },

   methods: {
showModal() {
        this.OpenDialog = !this.OpenDialog;
      },
  },
};
</script>



<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 36px; background-color: red;
  height: 36px;
  animation: spin 2s linear infinite;
      position: absolute;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
