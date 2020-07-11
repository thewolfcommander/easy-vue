<template>
    <v-card
        :loading="loading"
        class="mx-auto my-4"
    >

        <v-row justify="center">
            <router-link
                :to="{path: `/menu/${quantity}`}"
                class="text-decoration-none black--text"
            >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                    class="transparent"
                    max-height="90"
                    contain
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
            </router-link>
        </v-row>

        <v-card-subtitle class="mt-n2">
            <router-link
                :to="{path: '/menu/:id', params: {id: 'Hello'}}"
                class="text-decoration-none black--text"
            >{{ itemName }}</router-link>
        </v-card-subtitle>

        <v-card-text class="my-0">
            <v-row
                align="center"
                class="mx-0 my-0 mt-n5"
            >
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="9"
                ></v-rating>
                <div class="grey--text ml-1">4.5</div>
            </v-row>

            <div class="subtitle-1 my-0">
                $ • 199
            </div>

        </v-card-text>

        <v-divider class="mx-4 mt-n4"></v-divider>
        <v-card-actions class="mt-n4">
            <v-btn
                color="primary"
                x-small
                @click="reserve"
            >
                <v-icon
                    center
                    color="white"
                    small
                >mdi-cart</v-icon>
            </v-btn>

            <v-row justify="space-around mt-4 ml-1 mr-1">
                <v-btn
                    icon
                    x-small
                    color="secondary"
                    @click="quantity--"
                >
                    <v-icon
                        x-small
                        center
                    >mdi-minus</v-icon>
                </v-btn>
                <p class="mt-n0">{{ quantity }}</p>
                <v-btn
                    icon
                    x-small
                    color="primary"
                    @click="quantity++"
                >
                    <v-icon
                        x-small
                        center
                    >mdi-plus</v-icon>
                </v-btn>
            </v-row>
        </v-card-actions>
        <v-snackbar
            v-model="snackbar"
            bottom
            light
            :class="`${snack.color}--text`"
            left
            multi-line
            :timeout="6000"
        >
            {{ snack.text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    dark
                    text
                    :color="snack.color"
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-card>
</template>

<script>
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
            color: null
        },
        snackbar: false
    }),

    methods: {
        reserve() {
            this.loading = true;
            let data = {
                id: this.itemId,
                itemName: this.itemName,
                quantity: this.quantity,
                restaurantName: this.restaurantName,
                rating: this.rating,
                price: this.price
            };

            this.$store
                .dispatch("addToCart", data)
                .then(() => {
                    this.snack.text = `You have successfully added ${this.itemName} in your cart`;
                    this.snack.color = "success";
                    this.snackbar = true;
                    this.loading = false;
                })
                .catch(() => {
                    this.snack.text = "Some Error occured";
                    this.snack.color = "error";
                    this.snackbar = true;
                    this.loading = false;
                });
        }
    }
};
</script>

<style scoped>
.small-card-buttons {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}
</style>