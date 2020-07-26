<template>
    <v-row>
        <v-col
            cols="4"
            md="6"
        >
            <v-row wrap>
                <v-col
                    cols="3"
                    class="d-none d-md-flex"
                >
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
                <v-col
                    cols="12"
                    md="9"
                >
                    <p class="subtitle-1">{{ item.food.name }}</p>
                    <p class="subtitle-2 mt-n5 grey--text text--lighten-1">By {{ item.food.restaurant }}</p>
                </v-col>
            </v-row>
        </v-col>
        <v-col
            cols="3"
            md="2"
        >
            <v-row justify="space-around" class="mt-4 ml-1 mr-1">
                <v-btn
                    icon
                    x-small
                    color="secondary"
                    @click="changeQuantity(-1)"
                >
                    <v-icon
                        x-small
                        center
                    >mdi-minus</v-icon>
                </v-btn>
                <p class="mt-n0">{{ item.quantity }}</p>
                <v-btn
                    icon
                    x-small
                    color="primary"
                    @click="changeQuantity(1)"
                >
                    <v-icon
                        x-small
                        center
                    >mdi-plus</v-icon>
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
            cols="3"
            md="2"
            class="text-center"
        >
            <p class="subtitle-1 black--text mt-4">{{ item.food.price }} x {{ item.quantity }} = {{ itemCost }}</p>
        </v-col>
    </v-row>
</template>
<script>
// import NProgress from 'nprogress'

export default {
    data() {
        return {
            quantity: 1,
        };
    },
    props: ["item"],
    methods: {
        changeQuantity(val) {
            this.item.quantity += val;
        },
    },
    computed: {
        itemCost() {
            return this.item.food.price * this.item.quantity;
        },
    }
};
</script>