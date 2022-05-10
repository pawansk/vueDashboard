<template>
  <div class="flex flex-col">
<vueper-slides bullets-outside :dragging-distance="50">
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :title="slide.title"
    :content="slide.content" />
</vueper-slides>

    <div class="grid grid-cols-12">
      
      <div class="col-span-3">
        <Card>
          <template v-slot:title> This is a title.
          
             </template>
          <template v-slot:subtitle> This is a subtitle. </template>
          <template v-slot:body> This is a body section </template>
          <template v-slot:button>
            <Button
              :name="ddd"
              :darkMode="true"
              class="mr-2"
              :myFunction="func1"
            />
          </template>
        </Card>
      </div>

      <div class="col-span-3">
        <Card>
          <template v-slot:title> This is a title2. </template>
          <template v-slot:subtitle> This is a subtitle2. </template>
          <template v-slot:body> This is a body section2 </template>
          <template v-slot:button>
            <Button
              name="Popup1"
              :darkMode="false"
              class="mr-2"
              :myFunction="func1"
            />
          </template>
        </Card>
      </div>

      <div class="col-span-3">
        <Card>
          <template v-slot:title> This is a title3. </template>
          <template v-slot:subtitle> This is a subtitle3. </template>
          <template v-slot:body> This is a body section3 </template>
          <template v-slot:button>
            <Button
              name="Popup1"
              :darkMode="true"
              class="mr-2"
              :myFunction="func1"
            />
          </template>
        </Card>
      </div>

      <div class="col-span-3">
        <Card>
          <template v-slot:title> This is a title4. </template>
          <template v-slot:subtitle> This is a subtitle4. </template>
          <template v-slot:body> This is a body section4 </template>
          <template v-slot:button>
            <Button
              name="Popup1"
              :darkMode="false"
              class="mr-2"
              :myFunction="func1"
            />
          </template>
        </Card>
      </div>
    </div>


    <div class="">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
             <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password
            </th>
             <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance
            </th>
          </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200">
          <tr  v-for="(item, index) in items" :key="index.id"  @click="myDetails(item)" class="hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-left">{{ item.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-left">
              {{ item.name }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-left">
              {{ item.email }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-left">
              {{ item.password }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-left">
              {{ item.liveLocation }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-left">
              {{ item.creditBalance }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    


<span v-if="mounted">I am mounted</span>
    <span v-if="created">I am created</span>
<transition name="slide-fade">
    <div v-show="showModal" class="flex fixed right-0 top-0 items-center h-screen w-full justify-around bg-trans">
      <div class="modal w-full relative overflow-hidden">
<div class="absolute text-sm bg-red-200 right-0 hover:bg-red-400 cursor-pointer top-0 px-2" @click="showModalClose()">close</div>
<div id="myData"></div>
    </div>
    </div></transition>




    <modal-component :isModalVisible="isModal">
      <template v-slot:header2> Header Section1 </template>


<template v-slot:body2>Body Section2</template>

<template v-slot:footer2>
  <button @click="close()">close</button>
</template>

</modal-component>
 




</div>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import json from "@/components/EmployeeData.json";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: "Home",
  components: {
    Card,
    Button,
    ModalComponent,
    VueperSlides, VueperSlide
  },
  data() {
    return {
      slides: [
  {
    title: 'Aurora Borealis',
    content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
    image: 'https://i.ytimg.com/vi_webp/ehJg_OlcjpE/maxresdefault.webp',
    video: {
      url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
      props: {
        allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      }
    }
  },
  {
    title: 'Fjords',
    content: 'This video can\'t be interacted with.',
    image: 'https://i.ytimg.com/vi/2sr9MGkkeks/maxresdefault.jpg',
    video: {
      url: 'https://www.youtube.com/embed/2sr9MGkkeks?controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
      props: {
        allow: 'autoplay'
      },
      pointerEvents: false
    }
  }
],
      ddd: "Button1",
      isModal: false,
      items: json,
      a: 1,
      created: false,
      mounted: false,
      showModal: false
    };
  },

  methods: {

    myDetails(item) {
      this.showModal= true,
      document.getElementById("myData").innerHTML = "My name is " + item.name + "<br />" + "and my email ID is" + item.email +
       "<br />" + "and iam currently living in " + item.liveLocation;
 if (item.id == item.name) {
          alert("same id and name"),
          this.showModal= false
            }
  },

    showModalClose(){
      this.showModal = false
    },

    showData() {
      alert();
    },
    func1() {
      this.isModal = !this.isModal;
    },
    func2() {
      alert("Light Mode");
    },
    close() {
      this.isModal = false;
    },
  },

  created() {
    console.log((this.created = true), "this is created");
  },
  mounted() {
   // this.mounted = true;
       console.log((this.mounted = true), "this is mounted");
  },
};
</script>


<style scoped>
.bg-trans {
  background-color: #724f4f42;
}
.modal {
  width: 40%;
  padding: 40px;
  background-color: white;
  color: #000;
  border-radius: 10px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

