<template>

    <v-container fluid>
        <v-row
            wrap
            justify="center"
        >
            <v-card
                class="pa-4"
                flat
            >
                <v-btn
                    depressed
                    outlined
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'Cart'}"
                    disabled
                >Cart</v-btn>
                <v-btn
                    depressed
                    outlined
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'Addresses'}"
                    disabled
                >Address</v-btn>
                <v-btn
                    depressed
                    outlined
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'CheckoutHome'}"
                    disabled
                >Confirm</v-btn>
                <v-btn
                    depressed
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'OrderSuccess'}"
                >Created</v-btn>
            </v-card>
        </v-row>
        <v-container>

            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Order Created Successfully</h2>
                </v-col>
            </v-row>

            <v-row justify="center" class="mt-5">
                <v-img
                src="https://www.animatedimages.org/data/media/296/animated-festivity-and-celebration-image-0089.gif"
                lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                aspect-ratio="1"
                max-width="200"
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
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <p class="title">Order Details</p>
                </v-col>
                <v-col cols="12">
                    <OrderDetailCard />
                </v-col>
            </v-row>
            <v-row justify="end" wrap>
                <v-col
                    cols="12"
                    sm="5"
                    md="3"
                    lg="3"
                >
                    <v-btn
                        color="secondary"
                        tile
                        depressed
                        class="text-start"
                        x-large
                        router
                        :to="{name: 'Home'}"
                        width="100%"
                    >Track Orders</v-btn>
                </v-col>
                <v-col
                    cols="12"
                    sm="5"
                    md="3"
                    lg="3"
                >
                    <v-btn
                        color="primary"
                        tile
                        depressed
                        class="text-start"
                        x-large
                        router
                        :to="{name: 'Home'}"
                        width="100%"
                    >Continue Shopping</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import OrderDetailCard from "@/components/Orders/OrderDetailCard";

export default {
    components: {
        OrderDetailCard,
    },
    data() {
        return {
            tool: false,
        };
    },
    computed: {
        parseFoodCart() {
            return JSON.parse(this.$store.getters.getFoodCart);
        },
        foodCartItems() {
            return this.parseFoodCart.map((item) => JSON.parse(item));
        },
        authenticated() {
            return this.$store.getters.isLoggedIn || false;
        },
        cartItems() {
            return this.$store.getters.getCartItems;
        },
    },
    methods: {},
};
</script>

<style scoped>
.mdi-chevron-down {
    color: transparent !important;
}
</style>