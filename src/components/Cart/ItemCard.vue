<template>
    <v-row>
        <v-col cols="6">
            <v-row wrap>
                <v-col cols="3">
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        max-width="70"
                        max-height="70"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
                <v-col cols="9">
                    <p class="title">Cheese Pizza</p>
                    <p class="subtitle-2 mt-n5 grey--text">By Jugrans'</p>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="2">
            <v-row justify="space-around mt-4 ml-3 mr-2">
                <v-btn
                    fab
                    x-small
                    color="secondary"
                    @click="quantity--"
                >
                    <v-icon>mdi-minus</v-icon>
                </v-btn>
                <p class="mt-2">{{ quantity }}</p>
                <v-btn
                    fab
                    x-small
                    color="primary"
                    @click="quantity++"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-row>
        </v-col>
        <v-col
            cols="2"
            class="text-center"
        >
            <v-btn
                icon
                color="primary"
                class="mt-3"
                large
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-col>
        <v-col
            cols="2"
            class="text-center"
        >
            <p class="subtitle-1 black--text mt-4">Rs. 199</p>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data() {
        return {
            quantity: 1
        };
    }
};
</script>