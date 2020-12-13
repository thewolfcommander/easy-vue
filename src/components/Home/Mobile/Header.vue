<template>
  <v-carousel
    cycle
    height="500"
    width="100vw"
    hide-delimiter-background
    :show-arrows="false"
  >
  <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img
      width="100vw"
      :src="slide.src"
    ></v-img>
    </v-carousel-item>
  
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          {
            src: "https://user-images.githubusercontent.com/22274195/101622672-5ea1a500-3a3d-11eb-8619-b1fd71c0817e.jpg",
            title: "Advertisement",
            link: "Home"
          },
          {
            src: "https://comps.canstockphoto.com/fast-food-chain-menu-poster-eps-vectors_csp30609832.jpg",
            title: "Advertisement",
            link: "Home"
          }
        ],
      }
    },
  }
</script>