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
                    <p class="subtitle-2 mt-n5 grey--text text--lighten-1">By {{ item.food.restaurant.name }}</p>
                </v-col>
            </v-row>
        </v-col>
        <v-col
            cols="3"
            md="2"
        >
            <v-row
                justify="space-around"
                class="mt-4 ml-1 mr-1"
            >
                <v-btn
                    icon
                    :loading="loading"
                    x-small
                    color="secondary"
                    @click="decreaseQuantity()"
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
                    :loading="loading"
                    color="primary"
                    @click="increaseQuantity()"
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
                :loading="loading"
                large
                @click="removeItem()"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-col>
        <v-col
            cols="3"
            md="2"
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
import axios from "axios";

export default {
    data() {
        return {
            quantity: 1,
            dialog: false,
            loading: false,
        };
    },
    props: ["item"],
    methods: {
        increaseQuantity() {
            this.loading = true
            this.item.quantity = +this.item.quantity
            if (this.item.quantity < 50){
                this.item.quantity += 1
                this.changeQuantity()
            } else {
                this.loading = false
                console.log("hello")
            }
        },
        decreaseQuantity() {
            this.loading = true
            this.item.quantity = +this.item.quantity
            if (this.item.quantity > 0){
                this.item.quantity -= 1
                this.changeQuantity()
                
            } else {
                this.loading = false
                console.log("hello")
            }
        },
        changeQuantity() {
            this.loading = true;
            if (this.item.quantity > 1) {
                axios({
                    url: `${this.$store.state.apiUrl}cart/food-entry/${this.item.id}/update/`,
                    method: "PATCH",
                    headers: {
                        Authorization: `Token ${this.$store.getters.getToken}`,
                    },
                    data: {
                        quantity: this.item.quantity,
                    },
                })
                    .then(() => {
                        this.$emit("refreshCart");
                        this.loading = false;
                    })
                    .catch((err) => {
                        console.log(err);
                        this.loading = false;
                    });
            } else {
                this.loading = false
            }
        },
        removeItem() {
            this.loading = true;
            console.log(this)
            axios({
                url: `${this.$store.state.apiUrl}cart/food-entry/${this.item.id}/update/`,
                method: "DELETE",
                headers: {
                    Authorization: `Token ${this.$store.getters.getToken}`,
                },
            })
                .then(() => {
                   // console.log(this.$emit)
                    this.$emit("refreshCart");
                    this.loading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
        },
    },
    computed: {
        itemCost() {
            return this.item.food.price * this.item.quantity;
        },
    },
    created() {
        console.info(this.item);
    },
};
</script>