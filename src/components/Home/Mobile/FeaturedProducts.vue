<template>
    <v-container
        fluid
        class="grey lighten-4"
    >
        <v-container class="py-5">
            <v-row wrap class="mx-0 px-0">
                <v-col cols="9">
                    <v-row justify="start" class="px-1">
                        <h4 class="text-h6 ml-4 grey--text">Featured Items</h4>
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <v-row justify="end">
                        <v-btn
                        small
                            text
                            rounded
                            color="primary"
                            class="mt-1"
                        >Explore all</v-btn>
                    </v-row>
                </v-col>
                <v-col cols="12" class="mt-n5">
                    <v-row wrap>
                        <v-col cols="6" md="4" lg="3" v-for="(item, index) in 4" :key="index">
                            <FoodCard />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import FoodCard from '@/components/Common/Mobile/FoodCard'

export default {
    components: {
        FoodCard
    }
}
</script>