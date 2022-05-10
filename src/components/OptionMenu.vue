<template>
  <div class="custom-select" >

    <div class="selected" :class="{ open:open}" @click="myFunc()">
        <div class="flex justify-between">
        <div> <li class="flex justify-between">
            <span> {{ selected.id }}</span>
            <span> {{ selected.name }}</span>
             <span> <img :src="selected.src" alt="" class="h-8 w-8"></span>
        </li></div>
        <div>
      <span class="text-white" v-if="!open">+</span>
      <span class="text-white" v-if="open">-</span></div>
    </div></div>

    <div class="items" :class="{selectHide : !open}">
      <ul v-for="option of options" :key="option.id" @click="selected = option, open = false">
        <li class="flex justify-between">
            <span> {{ option.id }}</span>
            <span> {{ option.name }}</span>
             <span> <img :src="option.src" alt="" class="h-8 w-8"></span>
        </li>
      </ul>
    </div>



  </div>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true,},
  //  default: { type: String, required: false, default: null, },
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : '',  open: false,
    };
  },
methods:{
    myFunc(){
        this.open = !this.open
    },
}
};
</script>

<style scoped>
.custom-select .selected.open:after {
 transform: rotate(180deg);
    content: "";
    top: 17px;
    transition: 0.2s all ease-in-out;
}
.custom-select {
  position: relative;
  width: 30%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #0a0a0a;
  border-radius: 6px;
  border: 1px solid #666666;
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #ad8225;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #ad8225;
  border-left: 1px solid #ad8225;
  border-bottom: 1px solid #ad8225;
  position: absolute;
  background-color: #0a0a0a;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #ad8225;
}

.selectHide {
  display: none;
}
</style>
