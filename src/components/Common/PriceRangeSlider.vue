<template>
    <v-card class="pa-4 mt-5 pt-5" flat>
        <p class="body-1 secondary--text ml-5">Rs. {{ price[0]*100 }} - {{ price[1]*100 }}</p>
        <v-range-slider
            v-model="price"
            :color="color"
            track-color="grey"
        >
        </v-range-slider>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        price: [0, 20],
    })
};
</script>
