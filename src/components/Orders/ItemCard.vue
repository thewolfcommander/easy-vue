<template>
    <v-row>
        <v-col
            cols="6"
            md="7"
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
                    <p class="subtitle-2 mt-n5 grey--text text--lighten-1">By {{ item.food.restaurant.name }}</p>
                </v-col>
            </v-row>
        </v-col>
        <v-col
            cols="3"
            md="2"
        >
            <v-row justify="space-around" class="mt-4 ml-1 mr-1">
                <p class="mt-n0">{{ item.quantity }}</p>
            </v-row>
        </v-col>
        <v-col
            cols="3"
            md="3"
            class="text-center"
        >
            <p class="subtitle-1 black--text mt-4">{{ item.food.discount_price }} x {{ item.quantity }} = {{ item.cost }}</p>
        </v-col>
        <v-dialog
            v-model="dialog"
            hide-overlay
            persistent
            width="300"
            class="pt-4 pb-3"
        >
            <v-card
                color="white"
                dark
            >
                <v-card-text>
                    <span class="subtitle-2 primary--text">
                        Loading...
                    </span>
                    <v-progress-linear
                        indeterminate
                        color="primary"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
    
</template>
<script>
// import NProgress from 'nprogress'

export default {
    data() {
        return {
            quantity: 1,
            dialog: false,
        };
    },
    props: ["item"],
    methods: {
        changeQuantity(val) {
            this.item.quantity += val;
        },
        removeItem() {
            this.dialog = true
            this.$store.dispatch('removeFromFoodCart', this.item.food.id)
            .then(() => {
                this.dialog = false
            })
            .catch(err => {
                if(err.response && err.response.status === 401) {
                        this.$store.dispatch("refreshToken");
                    }
                console.log(err)
                this.dialog = false
            })
        }
    },
    computed: {
        itemCost() {
            return this.item.food.price * this.item.quantity;
        },
    }
};
</script>