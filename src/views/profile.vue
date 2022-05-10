<template>
<div>
  <table class="w-full table-full">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>color</th>
      <th>pantone value</th>
    </tr>
    <tr
      v-for="(item, id) in info"
      :key="id"
      class="hover hover:bg-green-200"
      @click="showRow(item)"
      :class="{ dddd: item.id > 2, aaaa: item.id <= 2 }"
    >
      <td class="p-2">{{ item.id }}</td>
      <td class="p-2">{{ item.name }}</td>
      <td class="p-2">{{ item.color }}</td>
      <td class="p-2">{{ item.pantone_value }}</td>
    </tr>
  </table>

  <div class="block mt-10 mb-10">
    {{ $store.state.count }}

    <button @click="incrementNumber" class="button">increment+</button>
    <button @click="decrementNumber">decrement-</button>
  </div>


<but name="dfdfd" />
<but name="ss" :myFunction="sss" />
<but :name="ss2" :myFunction="sss" />

<div class="flex bg-gray-200 mt-2">
<SoundPlayer :songs="musics" /> 

</div>
</div>
</template>

<script>
import SoundData from "@/components/SoundData.json"
import SoundPlayer from '@/components/SoundPlayer.vue'
import but from '@/components/but.vue'
var axios = require("axios").default;

export default {
  components: {but, SoundPlayer},
  data() {
    return {
      ss2: 'eeeeee',
      info: undefined,
      dropFunctionCall: false,
      musics: SoundData,
    };
  },

    mounted() {
    axios.get("https://reqres.in/api/products").then((res) => {
      this.info = res.data.data;
      //console.warn(res.data)
    });
  },

  methods: {
    sss(){
      alert("dfdfdf")
    },
    dropFunction(){
      this.dropFunctionCall = !this.dropFunctionCall
    },
  
    incrementNumber() {
      this.$store.commit("increment");
    },
    decrementNumber() {
      this.$store.commit("decrement");
    },

    showRow(item) {
      console.log(item.id);
      if (item.id > 2) {
        alert("dfdfd");
      } else return false;
    },
  },


};
</script>

<style>
.component__select {
   height: 38px;
   background-color: #F5F7FA;
   border: 1px solid #dddddd;
   line-height: 38px;
   display: grid;
   max-width: 400px;
   grid-template-columns: 10fr 1fr;
 }

 .component__select--name {
   font-size: 0.8rem;
   padding: 0 0 0 25px;
   cursor: pointer;
 }

 .c-arrow-down {
   justify-self: end;
 }

 .component__select-options {
   max-height: 180px;
   border: 1px solid #dddddd;
   border-top: none;
   overflow: auto;
   position: absolute;
   z-index: 1500;
   max-width: 400px;
   width: 400px;
   margin: 0;
   padding: 0;
 }

 .select--option {
   height: 35px;
   display: grid;
   align-content: center;
   padding: 0 0 0 25px;
   background-color: #f5f5fa;
   border-bottom: 1px solid #dddddd;
 }

 .select--option:last-child {
   border-bottom: none;
 }

 .select--option:nth-child(2n) {
   background-color: #ffffff;
 }
 
 .select--option input{
   display: none;
 }

 .single-option {
   height: 55px;
   background-color: #2595ec;
   font-size: 0.8rem;
   border: 1px solid red;
 }

 .cust-sel {
   width: 200px;
   height: 38px;
   background-color: #f5f5fa;
   border: 1px solid #dddddd;
 }

 .cust-sel:focus {
   outline-width: 0;
 }
.slide-in-enter,
.slide-in-leave-to {
    transform: translateY(-20%);
    opacity: 0;
}

.slide-in-enter-active {
    transition: all .5s ease;
}

.slide-in-leave-active {
    transition: all .5s ease;
}
.name{
  padding: 10px;
  background-color:#b1abab;
  border-radius: 10px;
  display: flex; width: 200px;
  color: #000; margin-bottom: 10px;
}
.drop span{
   padding: 10px;
  background-color:#b1abab;
  border-radius: 10px;
  color: #000; width: 200px;
  display: flex; margin-bottom: 5px;
}
.dddd {
  color: red;
}
.aaaa {
  color: blue;
}

</style>

