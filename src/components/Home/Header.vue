<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    :show-arrows="false"
    width="100vw"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
    width="100vw"
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
            src: "https://user-images.githubusercontent.com/22274195/101616984-0dda7e00-3a36-11eb-888a-9b7be1ee1b4e.jpg",
            title: "Advertisement",
            link: "Home"
          },
          {
            src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/120694699/original/71918c9736cc66724aa8712337d3bbc67be46833/design-food-flyer-poster-or-restaurant-menu.jpg",
            title: "Advertisement",
            link: "Home"
          }
        ],
      }
    },
  }
</script>