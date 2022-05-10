<template>
  <div class="w-full">
    <div class="w-full mb-12 flex">
      <label for="" class="items-center font-semibold"
        >Select product category</label
      >
      <select
        name=""
        id=""
        class="bg-gray-100 px-6 py-3 border b-gray-500 ml-6"
      >
        <option value="" v-for="product in products" :key="product.id">
          {{ product.category }}
        </option>
      </select>
    </div>

    <div class="grid grid-cols-12 gap-6">
      <div
        class="col-span-12 sm:col-span-6 md:col-span-3 border b-gray-1 p-2"
        v-for="product in products"
        :key="product.id"
      >
        {{ product.description }}
        <div class="product-card">
          <div class="imgpart">{{ product.title }}</div>
          <div class="contentpart"></div>
          <div class="flex justify-between">
            <button
              class="px-4 py-2 bg-red-200 font-semibold font-sm text-red-500"
            >
              delete product
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="btn m-3 bg-green-200" @click="printData()">random</button>
    <button class="btn m-3 bg-green-200" @click="usingFilter()">Filter</button>
    <button class="btn m-3 bg-green-200" @click="usingSet()">Using Set</button>
  </div>
</template>

<script>
var axios = require("axios").default;
// let person = [
// {name: "john"}, 
// {name: "jane"}, 
// {name: "imelda"}, 
// {name: "john"},
// {name: "jane"}
// ];


export default {
  data() {
    return {
      products: null,
      productsCategory:new Array,
    //  dropFunctionCall: false,
     
    };
    
  },

  methods: {
    printData(){
      const obj = [...new Map(this.products.map(item => [JSON.stringify(item.category), item.category])).values()];
      console.log(obj);
    },
    usingFilter(){
      this.products.forEach(element => {
        if(this.productsCategory.length===0){
          this.productsCategory.push(element.category)
        }
        else{
          let valueMatch = false;
          this.productsCategory.forEach(value => {
            if(value===element.category){
              valueMatch=true;
            }
          });
          !valueMatch?this.productsCategory.push(element.category):"";
        } 

      });
      console.log(this.productsCategory)
    },
     usingSet(){
      const obj = [...new Set(this.products.map(item =>item.category))];
      console.log(obj);
    },


  },
  mounted() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.products = res.data;
      console.warn(res.data);
    });
  },
};
</script>



<style lang="scss">
@import "../styles/my-styles.scss";
</style>