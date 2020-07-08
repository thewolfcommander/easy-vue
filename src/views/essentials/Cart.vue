<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">My Shopping Cart</h2>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
                        <v-card-text>
                            <v-row wrap>
                                <v-col
                                    cols="4"
                                    md="6"
                                    class="text-center"
                                >
                                    <p class="subtitle-2 black--text">Description</p>
                                </v-col>
                                <v-col
                                    cols="3"
                                    md="2"
                                    class="text-center"
                                >
                                    <p class="subtitle-2 black--text">Quantity</p>
                                </v-col>
                                <v-col
                                    cols="2"
                                    class="text-center"
                                >
                                    <p class="subtitle-2 black--text">Remove</p>
                                </v-col>
                                <v-col
                                    cols="3"
                                    md="2"
                                    class="text-center"
                                >
                                    <p class="subtitle-2 black--text">Price</p>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <v-row wrap>
                                <v-col cols="12" v-for="(item, index) in 4" :key="index">
                                    <ItemCard />
                                </v-col>
                            </v-row>

                            <v-divider></v-divider>
                            <TotalPart />
                            <PromotionPart />
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import ItemCard from '@/components/Cart/ItemCard'
import TotalPart from '@/components/Cart/TotalPart'
import PromotionPart from '@/components/Cart/PromotionPart'

export default {
    components: {
        ItemCard,
        TotalPart,
        PromotionPart
    }
}
</script>

<style scoped>
.mdi-chevron-down {
    color: transparent !important;
}
</style>