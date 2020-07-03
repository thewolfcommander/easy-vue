<template>
    <v-card
        :loading="loading"
        class="mx-auto my-12"
    >

        <v-row justify="center">
            <nuxt-link
                :to="{path: `/menu/${quantity}`}"
                class="text-decoration-none black--text"
            >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-width="250"
                    max-height="150"
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
            </nuxt-link>
        </v-row>

        <v-card-title>
            <nuxt-link
                :to="{path: '/menu/:id', params: {id: 'Hello'}}"
                class="text-decoration-none black--text"
            >{{ itemName }}</nuxt-link>
        </v-card-title>
        <v-card-subtitle>{{ restaurantName }} Restraunt</v-card-subtitle>

        <v-card-text class="my-0">
            <v-row
                align="center"
                class="mx-0 my-0"
            >
                <v-rating
                    :value="rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>
                <div class="grey--text ml-4">{{ rating }}</div>
            </v-row>

            <div class="subtitle-1 my-0">
                $ • {{ price }}
            </div>

        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
            <v-btn
                color="primary"
                @click="addToCart"
            >
                Add to Cart
            </v-btn>

            <v-row justify="space-around ml-3 mr-2">
                <v-btn
                    fab
                    small
                    color="secondary"
                    @click="quantity--"
                >
                    <v-icon>mdi-minus</v-icon>
                </v-btn>
                <p class="mt-2">{{ quantity }}</p>
                <v-btn
                    fab
                    small
                    color="primary"
                    @click="quantity++"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-row>
        </v-card-actions>
        <Snackbar :snack="snack" :snackbar="snackbar" />
    </v-card>
</template>

<script>
import SnackBar from '@/components/Common/SnackBar'

export default {
    data: () => ({
        loading: false,
        selection: 1,
        itemId: 2983627382673,
        quantity: 1,
        itemName: "Cheese Pizza",
        restaurantName: "Jugrans",
        rating: 4.2,
        price: 199,
        snack: {
            text: null,
            color: null,
        },
        snackbar: false
    }),

    methods: {
        reserve() {
            this.loading = true;
            setTimeout(() => {
                data = {
                    itemId: this.itemId,
                    itemName: this.itemName,
                    quantity: this.quantity,
                    restaurantName: this.restaurantName,
                    rating: this.rating,
                    price: this.price
                }

                // this.$store.dispatch('updateCart', data)
                // .then(() => {
                    
                // })
                // .catch(err => {
                //     this.snack.text = err.message
                //     this.snack.color = 'error'
                //     this.snackbar = true
                //     this.loading = false;
                // })
                this.snack.text = `You have successfully added ${this.itemName} in your cart`
                this.snack.color = 'success'
                this.snackbar = true
                alert('Added')
                this.loading = false;
            }, 2000);
        }
    },
    components: {
        SnackBar,
    }
};
</script>