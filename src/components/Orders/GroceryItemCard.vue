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
                    <p class="subtitle-1">{{ item.grocery.name }}</p>
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
            <p class="subtitle-1 black--text mt-4">{{ item.grocery.price }} x {{ item.quantity }} = {{ itemCost }}</p>
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

        removeItem() {
            this.dialog = true
            this.$store.dispatch('removeFromGroceryCart', this.item.grocery.id)
            .then(() => {
                this.dialog = false
            })
            .catch(err => {
                console.log(err)
                this.dialog = false
            })
        }
    },
    created() {
        console.log(this.item)
    },
    computed: {
        itemCost() {
            return this.item.grocery.price * this.item.quantity;
        },
    }
};
</script>