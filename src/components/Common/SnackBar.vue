<template>
    <v-snackbar
      v-model="snackbar"
      bottom
      :color="snack.color"
      left
      multi-line
      :timeout="6000"
    >
      {{ snack.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
    props: ['snack', 'snackbar'],
    data() {
        return {
        }
    }
}
</script>