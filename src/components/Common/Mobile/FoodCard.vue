<template>
    <v-card
        :loading="loading"
        class="mx-auto my-4"
    >

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

        <v-card-subtitle class="mt-n2">{{ item.itemName }}
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
        <v-card-actions class="text-center">
            <v-row wrap>
                <v-col cols="9">
                    <v-btn
                        color="primary"
                        small
                        depressed
                        block
                        @click="sheet=!sheet"
                    >
                        <v-icon
                            small
                            left
                        >mdi-cart</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="3">
                     <v-btn
                     class="ml-n4 mt-n1" 
                    icon
                    :color="wishlistColor"
                    
                >
                    <v-icon center>mdi-heart</v-icon>
                </v-btn>
                </v-col>

               
            </v-row>
        </v-card-actions>
        <FoodSpecModal :sheet="sheet" :item="item" />

    </v-card>
</template>

<script>
import FoodSpecModal from "@/components/Common/FoodSpecModal";

export default {
    data: () => ({
        sheet: false,
        loading: false,
        selection: 1,
        wishlistColor: "grey",
        item: {
            itemId: 2983627382673,
            itemName: "Cheese Pizza",
            restaurantName: "Jugrans",
            rating: 4.2,
            price: 199
        },
        snack: {
            text: null,
            color: null
        },
        snackbar: false
    }),
    components: {
        FoodSpecModal
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