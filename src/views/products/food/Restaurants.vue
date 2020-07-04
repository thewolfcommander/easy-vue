<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Best Restaurants out there</h2>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
                        <v-row wrap>
                            <v-col cols="6" md="3" lg="3" v-for="(item, index) in 8" :key="index">
                                <RestaurantCard />
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import RestaurantCard from '@/components/Common/Mobile/SmallRestaurantCard'

export default {
    components: {
        RestaurantCard
    }
}
</script>

<style scoped>
</style>