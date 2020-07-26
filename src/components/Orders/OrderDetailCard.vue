<template>
  <v-card
    class="mx-auto"
    light
  >
    <v-card-title>
      <v-icon
        left
      >
        mdi-truck-fast
      </v-icon>
      <span class="subtitle-1 font-weight-bold">Address Name</span>
    </v-card-title>

    <v-card-text class="subtitle-2">
      20, Ram Vikas Marg, Area no.2, Muzaffarnagar, Uttar Pradesh, India - 251202
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      //
    }),
  }
</script>