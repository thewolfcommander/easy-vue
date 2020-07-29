<template>
  <div class="text-center">
    <v-overlay v-model="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
  export default {

    data() {
        return {
            overlay: true,
        }
    },
    beforeCreate() {
        setTimeout(() => {
            this.overlay = this.$store.getters.getOverlay
        }, 3000)
    }

    // watch: {
    //   overlay (val) {
    //     val && setTimeout(() => {
    //       this.overlay = false
    //     }, 3000)
    //   },
    // },
  }
</script>