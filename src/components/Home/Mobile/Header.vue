<template>
  <v-carousel
    cycle
    height="450"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
    >
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
            src: "https://www.crushpixel.com/static13/preview2/fast-food-restaurant-poster-design-1121379.jpg",
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