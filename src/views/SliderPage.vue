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

</div>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: "Home",
  components: {
    VueperSlides, VueperSlide
  },
   data() {
    return {
      slides: [
  {
    title: 'Aurora Borealis',
    content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
    image: 'https://i.ytimg.com/vi_webp/ehJg_OlcjpE/maxresdefault.webp',
  },
  {
    title: 'Fjords',
    content: 'This video can\'t be interacted with.',
    image: 'https://i.ytimg.com/vi/2sr9MGkkeks/maxresdefault.jpg',
  }
],
    };
  },
};
</script>

