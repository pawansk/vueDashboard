<template>
  <div>
 <div class="flex my-2"></div>
 <OptionMenu :options="option" class="select"  />
  </div>
<!-- 
<ul v-if="dd">
  <li v-for="itemp in users" :key="itemp.name">
<UserDetails :data="itemp" />

  </li>
</ul> -->



</template>


<script>
import OptionMenu from "@/components/OptionMenu.vue";
//import UserDetails from "@/components/UserDetails.vue";

export default {
  components: {
OptionMenu, 
  },

  data() {
   
    return {

      users: [
        {name : "rohan", email : "rohan@gmail.com"},
        {name : "shyam", email : "shyam@gmail.com"},
        {name : "ram", email : "ram@gmail.com"},
      ],
     option:[
      {
        id: 1,
        name: 'Rohan',
        src: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
        discription : "hjkdfjdkfdkfld"
      },
      {
        id: 2,
        name: 'Shyam',
        src: "https://www.w3schools.com/howto/img_avatar2.png",
        discription : "dsds"
      },
       {
        id: 3,
        name: 'Ram',
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSye8_F5ZHKn2FQ51IdAmOKH3VaIfKkZLXVEA&usqp=CAU",
        discription : "fg6546745"
      }
     ],
     selectedName : ''
    };
  },
  methods: {


  },

};
</script>

<style scoped>

</style>
