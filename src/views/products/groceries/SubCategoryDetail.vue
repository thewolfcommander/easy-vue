<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-btn color="grey" rounded outlined @click="$router.go(-1)">Go Back</v-btn>
            </v-row>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Grocery Category</h2>
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
                                <SingleGroceryCard />
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import SingleGroceryCard from '@/components/Common/SingleGroceryCard'

export default {
    components: {
        SingleGroceryCard
    }
}
</script>

<style scoped>
</style>