<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Household Categories</h2>
                </v-col>
            </v-row>
            <v-row justify="center" class="d-none d-md-flex">
                <v-col cols="12">
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
                        <v-row wrap>
                            <v-col cols="6" md="3" lg="3" v-for="(item, index) in items" :key="index">
                                <GroceryCategoryCard :item="item" />
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" class="d-flex d-md-none">
                <v-col cols="12">
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
                        <v-row wrap>
                            <v-col cols="6" md="3" lg="3" v-for="(item, index) in items" :key="index">
                                <MobileGroceryCategoryCard :item="item" />
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>


<script>
import axios from 'axios'
import GroceryCategoryCard from '@/components/Common/GroceryCategoryCard'
import MobileGroceryCategoryCard from '@/components/Common/Mobile/SmallGroceryCategoryCard'

export default {
    components: {
        GroceryCategoryCard,
        MobileGroceryCategoryCard,
    },
    data() {
        return {
            items: JSON.parse(localStorage.getItem('groceryCategories')) || [],
        }
    },

    created() {
        axios({
            url: `https://www.easyeats.co.in/api/v1/groceries/categories/?active=true`,
            method: 'GET'
        })
        .then(response => {
            this.items = response.data.results
            localStorage.setItem('groceryCategories', JSON.stringify(response.data.results))
        })
        .catch(err => {
            console.log(err)
        })
    },
}
</script>

<style scoped>
</style>