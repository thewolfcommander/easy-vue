<template>
    <v-row wrap >
        <v-col
        v-if="$store.getters.getVersion"
            cols="12"
            class="text-start"
        >
            <p
                class="caption"
                v-if="authenticated"
            >If you have a promotion code, please enter it here:</p>
            <p
                class="caption"
                v-else
            >If you have a promotion code, please <router-link :to="{name: 'Login'}">login </router-link>first.</p>
        </v-col>
        <v-col
            cols="12"
            md="9"
            class="inline"
            v-if="authenticated && $store.getters.getVersion"
        >
            <v-text-field
                v-model="promo"
                outlined
                placeholder="Enter Promo Code"
                solo
                class="inline-field"
                full-width
                flat
            ></v-text-field>
            <v-btn
                depressed
                tile
                color="primary"
                class="inline-field-button"
            >Apply Discount</v-btn>
        </v-col>
        <v-col
            cols="12"
            md="3"
        >
            <v-row
                wrap
                class="mt-n3"
            >
                <v-col
                    cols="12"
                    v-if="authenticated"
                >
                    <v-btn
                        color="success"
                        tile
                        fab
                        depressed
                        fixed
                        bottom
                        class="text-start mb-5 pb-5"
                        x-large
                        @click="createCart()"
                        width="100%"
                    >Checkout <span class="ml-2 white--text">₹{{cost.total || 0}}</span></v-btn>
                </v-col>

                <v-col
                    cols="12"
                    v-else
                >
                    <v-btn
                        color="grey"
                        outlined
                        tile
                        depressed
                        class="text-start"
                        x-large
                        router
                        :to="{name: 'Login'}"
                        width="100%"
                    >Login/Signup</v-btn>
                </v-col>

                <v-col cols="12">
                    <v-btn
                        color="grey"
                        outlined
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
export default {
    props: ["authenticated", 'syncCart', 'cost'],
    data() {
        return {
            promo: "",
            dialog: false,
        }
    },
    computed: {
        parseFoodCart() {
            return JSON.parse(this.$store.getters.getFoodCart)
        },
        foodCartItems() {
            return this.parseFoodCart.map(item => JSON.parse(item))
        },
        prepareForServerCart() {
            let foods = []
            this.foodCartItems.forEach(item => {
                let food = {}
                food.food = item.food.id,
                food.quantity = item.quantity
                foods.push(food)
            })
            return foods
        },
    },
    methods: {
        createCart() {
            this.dialog = true
            this.syncCart()

                this.dialog = false
            this.$router.push({name: 'Addresses'})
        }
    }
};
</script>

<style scoped>
.inline {
    position: relative;
}
.inline-field {
    height: 50px !important;
    border-radius: 0 !important;
}
.inline-field-button {
    height: 55px !important;
    position: absolute;
    top: 12px;
    right: 12px;
    border-radius: 0 !important;
}
</style>