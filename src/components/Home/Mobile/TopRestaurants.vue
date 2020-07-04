<template>
    <v-container
        fluid
        class="primary lighten-5"
    >
        <v-container class="py-5">
            <v-row wrap class="mx-0 px-0">
                <v-col cols="9">
                    <v-row justify="start" class="px-1">
                        <h4 class="text-h6 ml-4 primary--text">Restaurants</h4>
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <v-row justify="end">
                        <v-btn
                            text
                            rounded
                            color="primary"
                            small
                            class="mt-1"
                        >Explore all</v-btn>
                    </v-row>
                </v-col>
                <v-col cols="12" class="mt-n5">
                    <v-row wrap>
                        <v-col cols="6" md="4" lg="3" v-for="(item, index) in 4" :key="index">
                            <SmallRestaurantCard />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import SmallRestaurantCard from '@/components/Common/Mobile/SmallRestaurantCard'

export default {
    components: {
        SmallRestaurantCard
    }
}
</script>