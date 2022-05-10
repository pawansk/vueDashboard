<template>
  <div>
    <div class="flex w-full gap-4 mt-4">
    <div class="p-4 mb-10 bg-gray-100">
   <propsFile myButton="My Button" :myFunction="function1" :darkMode="false"></propsFile>

    <div v-if="myDiv" class="mt-4">Show and Hide</div>
</div>
    <div class="p-4 mb-10 bg-blue-100">
    <p :class="{ isActive : active, isActive2 : active2}">demo</p>
    
     <p v-bind:style="{color : activeColor}" >demoss</p>
    </div>

      <div class="p-4 mb-10 bg-green-100">  
------------------<b>computed</b>-----------------------
<div class="mt-10">
<h3>Computed Property</h3>
<p>Computed Property {{allResult}}</p>

<p>Methods Property is {{allResultMethods()}}</p>

  {{(dollor*rupeesval)-discount}}
</div>
      </div>

          <div class="p-4 mb-10 bg-red-100">
------------------<b>v-if</b>-----------------------
<div v-show="ok" class="mb-12"><h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p></div>
          </div>

      <div class="p-4 mb-10 bg-pink-100">        
------------------<b>v-else</b>-----------------------
<br />
<button @click="awesome = !awesome">Toggle</button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
      </div> 
</div>
    <menuPart :menus="userName" :items="userItem"></menuPart>

    <nav class="px-6 py-2 inline-block bg-gray-100 w-full">
      <ul>
        <li
          v-for="(item, index) in topmenu"
          :key="index"
          v-on:mouseover="mouseOver(index)"
          class="inline-block px-6 py-2 mx-12"
        >
          <div
            v-bind:href="item.url"
            class="pure-menu-link"
            @click="mouseOverNav()"
          >
            {{ item.title }}
          </div>
        </li>
      </ul>
      <ul v-if="topmenuhover">
        <li
          v-for="(subitem, index) in topmenu[topmenuitem].submenus"
          :key="index"
          :class="{ myclass: ismyClass }"
        >
          <a v-bind:href="subitem.url" class="pure-menu-link">{{
            subitem.title
          }}</a>
        </li>
      </ul>
      <div></div>
    </nav>
    <header>
      <div class="wrap">
        <div id="hamburger" v-on:click="display_menu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
  
        <nav id="menu">
          <li><a>Menu 1</a></li>
          <li class="drop">
            <a v-on:click="display_drop_menu()">Menu 2 dropdown <i class="icon-arrow"></i></a>
            <ul class="drop_menu">
              <a>Sub menu 1</a>
              <a>Sub menu 2</a>
              <a>Sub menu 3</a>
            </ul>
          </li>
          <li class="drop">
            <a v-on:click="display_drop_menu(this.activeClass=!this.activeClass)"
              >Menu 3 dropdown <i class="icon-arrow"></i
            ></a>
            <ul class="drop_menu">
              <a>Sub menu 1</a>
              <a>Sub menu 2</a>
              <a>Sub menu 3</a>
            </ul>
          </li>
          <li><a>Menu 4</a></li>
        </nav>
      </div>
    </header>

<h1>{{count}}</h1>
<button class="button is-primary" @click="increment()">Add</button>


<div v-on:click="togglebut()"><span>toggle</span>
<div v-if="!showdata">+</div>
<div v-if="showdata">-</div>

</div>


<div v-if="showdata"><ul>
  <li>aaa</li>
  <li>bbb</li>
  <li>ccc</li>
</ul></div>

  </div>
</template>


<script>
import propsFile from "@/components/PropsFile.vue";
import menuPart from "@/components/MenuPart.vue";


export default {
  components: {
    menuPart, propsFile, 
  },

  data() {
    return {
      showdata: false,
      count: 1,
      activeClass: true,
      ismyClass: true,
      topmenuhover: false,
      topmenu: [
        { title: "Home", url: "/", submenus: [] },
        {
          title: "About",
          url: "/about",
          submenus: [
            { title: "Who we are", url: "/about#us" },
            { title: "What we do", url: "/about#store" },
            { title: "Our range", url: "/about#range" },
          ],
        },
        {
          title: "Contact Us",
          url: "/contact",
          submenus: [
            { title: "Information", url: "/contact#info" },
            { title: "Returns", url: "/contact#return" },
            { title: "Locate Us", url: "/contact#locate" },
          ],
        },
      ],
      userName: [
        { id: "0", name: "menu1" },
        { id: "1", name: "menu2" },
        { id: "2", name: "menu3" },
      ],
      userItem: [
        { id: "0", name: "User profile" },
        { id: "1", name: "User Login" },
        { id: "2", name: "User setting" },
        { id: "3", name: "Logout" },
      ],
      type: "A",
      myDiv: true,
      active2: true,
      activeColor: "red",
      dollor: 100,
      rupeesval: 70,
      discount: 10,
      ok: true,
      awesome: false,
    };
  },
  methods: {
    togglebut(){
     this.showdata=!this.showdata
    },
increment(){
    this.count++
},

    display_drop_menu: function () {
      var drop_menu =
      event.target.parentElement.getElementsByClassName("drop_menu")[0];
      var drop_menus = document.getElementsByClassName("drop_menu");
     
      Array.from(drop_menus).forEach(function (e) {
        if (e != drop_menu) {
          e.classList.remove("display");
          
        }
      });

      !drop_menu.classList.contains("display") ? drop_menu.classList.add("display") : drop_menu.classList.remove("display");
   
    },
 
    mouseOver(index) {
      this.topmenuitem = index;
    },

    mouseOverNav() {
      this.topmenuhover = !this.topmenuhover;

      // this.topmenuhover = !this.topmenuhover;
    },

    mouseLeaveNav: function () {
      this.topmenuhover = false;
    },

    changeText(event) {
      this.number = event.target.value;
    },

    function1() {
      this.myDiv = !this.myDiv;
    },

    allResultMethods() {
      return this.dollor * this.rupeesval - this.discount;
    },

  },
 
  computed: {
    allResult() {
      return this.dollor * this.rupeesval - this.discount;
    },
   
  },
};
</script>

<style scoped>
.activee{
  color: blue !important;;
}
.activee2{
  color: orangered!important
}
.myclass {
  color: red;
}
header {
  display: flex;
  z-index: 1;
  padding: 10px 0;
  background-color: #ffffff;
  width: 100%;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: 0.33s;
}
header .wrap {
  padding: 0 2%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
header img {
  width: 100px;
}
header #menu {
  display: flex;
  flex-direction: row;
}
header #menu li {
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  margin-left: 20px;
}
header #menu li i {
  width: 12px;
  height: 12px;
  background-color: #3E3A37;
}
header #menu li a {
  color: #3E3A37;
  cursor: pointer;
  font-size: 1.15em;
  border: none;
  border-bottom: 2px solid #ffffff;
  transition: 0.15s;
  background: none;
}
header #menu li a:hover {
  border-bottom-color: #41B883;
  color: #41B883;
}
header #menu li a:hover i {
  background-color: #41B883;
}
header .drop_menu {
  position: absolute;
  display: block;
  top: 149%;
  transform: scaleY(0);
  width: auto;
  transform-origin: top;
  background-color: #ffffff;
  transition: 0.25s;
  padding-bottom: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
}
header .drop_menu a {
  margin-left: 20px;
  display: block;
  transition: 0.45s;
  opacity: 0;
  margin-right: 20px;
  padding: 10px 0 0 0;
}
header .drop_menu.display {
  transform: scaleY(1);
}
header .drop_menu.display a {
  opacity: 1;
}
header #hamburger {
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: 3%;
  top: 30px;
  display: none;
  transform: translateY(-50%);
}
header #hamburger span {
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #3E3A37;
  display: block;
  transition: 0.33s;
}
header #hamburger span:nth-child(1) {
  width: 12px;
}
header #hamburger span:nth-child(2) {
  width: 24px;
}
header #hamburger span:nth-child(3) {
  width: 12px;
}
.display_menu header #hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(2px, 1px);
}
.display_menu header #hamburger span:nth-child(2) {
  transform: rotate(-45deg);
}
.display_menu header #hamburger span:nth-child(3) {
  transform: rotate(45deg) translate(6px, -9px);
}
#background {
  content: '';
  display: block;
  width: 100vw;
  height: 200vh;
  padding: 5%;
  background-color: #41B883;
}
#background h3 {
  margin: 0;
  margin-bottom: 1%;
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
}
#background h3 i {
  width: 13px;
  height: 20px;
  background-color: #ffffff;
}
#background button {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1.3em;
  border: none;
  background-color: #435466;
  color: #ffffff;
}
#loader {
  display: block;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  margin-left: -25px;
  margin-top: -25px;
  -webkit-animation: spin 1s infinite linear;
          animation: spin 1s infinite linear;
}
#loader span {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  border-width: 0px 0px 10px 10px;
  border-style: solid;
  border-color: transparent;
}
#loader span:nth-child(0) {
  border-left-color: #41B883;
}
#loader span:nth-child(1) {
  transform: rotate(-40deg);
  border-left-color: #41B883;
}
#loader span:nth-child(2) {
  transform: rotate(-80deg);
  border-left-color: #41B883;
}
#loader span:nth-child(3) {
  transform: rotate(-130deg);
  border-left-color: #435466;
}
#loader span:nth-child(4) {
  transform: rotate(-170deg);
  border-left-color: #435466;
}
#loader span:nth-child(5) {
  transform: rotate(-210deg);
  border-left-color: #435466;
}
#loader span:nth-child(6) {
  transform: rotate(-250deg);
  border-left-color: #3E3A37;
}
#loader span:nth-child(7) {
  transform: rotate(-280deg);
  border-left-color: #3E3A37;
}
#loader span:nth-child(8) {
  transform: rotate(-320deg);
  border-left-color: #3E3A37;
}
#loader span:nth-child(9) {
  transform: rotate(-360deg);
  border-left-color: #41B883;
}
@-webkit-keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
#overlay {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #3E3A37;
  opacity: 0.5;
}
@media screen and (max-width: 660px) {
  body {
    padding-top: 70px;
  }
  header .wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
  header img {
    width: 50px;
  }
  header #hamburger {
    display: block;
  }
  header #menu {
    width: 100%;
    display: block;
    height: 0;
    transform-origin: 50% 0;
    transition: 0.33s ease;
    flex-direction: column;
  }
  .display_menu header #menu {
    height: calc(100vh - 64px);
  }
  .display_menu header #menu li {
    height: calc((100vh - 113px)/8);
    border-bottom: 1px solid #DAD9D7;
    transition: 0.25s ease;
    opacity: 1;
    display: block;
  }
  header #menu li {
    height: 0;
    opacity: 0;
    margin-left: 0;
    transition: 0.25s ease;
  }
  header #menu li a {
    left: 0;
    line-height: calc((100vh - 113px)/8);
    padding-left: 20px;
    border: none;
    height: 100%;
    width: 100%;
    display: block;
  }
  header #menu li a:hover {
    color: #ffffff;
    background-color: #41B883;
  }
  header #menu li a:hover i {
    background-color: #ffffff;
  }
  header #menu li i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #3E3A37;
  }
  header .drop_menu {
    top: calc((100vh - 113px)/8);
    box-shadow: none;
    left: 0;
    padding-bottom: 0;
    width: 100%;
  }
  header .drop_menu a {
    width: 100%;
    padding: 0 !important;
    padding-left: 40px !important;
    margin: 0;
    border-bottom: 1px solid #DAD9D7 !important;
  }
}
@media screen and (max-width: 660px) and (max-height: 500px) {
  .display_menu header {
    max-height: 100vh;
    overflow-y: scroll;
  }
  .display_menu header #menu li {
    height: calc((100vh - 113px)/4);
  }
  header #menu li a {
    line-height: calc((100vh - 113px)/4);
  }
  header .drop_menu {
    top: calc((100vh - 113px)/4);
  }
}
i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}

</style>
