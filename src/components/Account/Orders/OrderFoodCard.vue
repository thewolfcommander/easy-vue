<template>
    <v-card class="mx-auto my-4">

        <v-row justify="center">
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
        </v-row>

        <v-card-subtitle class="mt-n2">{{ trimmedName }}
        </v-card-subtitle>

        <v-card-text class="my-0">
            <v-row
                align="center"
                class="mx-0 my-0 mt-n5"
            >
                <div class="ml-1 caption">
                    <router-link
                        :to="{name: 'RestaurantDetail', params: {restaurantId: item.food.restaurant.id }}"
                        class="text-decoration-none grey--text"
                    >{{ item.food.restaurant.name }}</router-link> 
                </div>
            </v-row>

            <div class="subtitle-1 my-0">
                &#8377; <strike class="grey--text caption">{{ item.food.gross_price }}</strike> {{ item.food.discount_price }} <span class="primary--text ml-3">x {{ item.quantity }}</span>
            </div>

        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        sheet: false,
        loading: false,
        selection: 1,
        wishlistColor: "grey",
        snack: {
            text: null,
            color: null,
        },
        snackbar: false,
    }),
    props: ["item"],

    computed: {
        trimmedName() {
            if (this.item.food.name.length > 18) {
                return `${this.item.food.name.slice(0, 18)}...`;
            } else {
                return this.item.food.name;
            }
        },
    },
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