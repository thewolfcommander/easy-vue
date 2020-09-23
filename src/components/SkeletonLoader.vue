<template>
  <v-sheet
    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
    class="px-3 pt-3 pb-12"
  >
    <v-responsive
      max-width="100vw"
      min-width="320"
      class="mx-auto"
    >
      <v-skeleton-loader
        ref="skeleton"
        :boilerplate="boilerplate"
        :type="type"
        :tile="tile"
        class="mx-auto"
      ></v-skeleton-loader>
    </v-responsive>
  </v-sheet>
</template>

<script>
  export default {
    inject: ['theme'],

    data: () => ({
      boilerplate: false,
      tile: false,
      type: 'card',
      types: [],
    }),
  }
</script>