<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Grocery Sub Categories</h2>
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
                                <GrocerySubCategoryCard :item="item" />
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
                                <SmallGrocerySubCategoryCard :item="item" />
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
import GrocerySubCategoryCard from '@/components/Common/GrocerySubCategoryCard'
import SmallGrocerySubCategoryCard from "@/components/Common/Mobile/SmallGrocerySubCategoryCard";

export default {
    components: {
        GrocerySubCategoryCard,
        SmallGrocerySubCategoryCard
    },
    data() {
        return {
            items: JSON.parse(localStorage.getItem('grocerySubCategories')) || [],
        }
    },

    created() {
        axios({
            url: `${this.$store.state.apiUrl}grocery/sub-categories/?active=true`,
            method: 'GET'
        })
        .then(response => {
            this.items = response.data.results
            localStorage.setItem('grocerySubCategories', JSON.stringify(response.data.results))
        })
        .catch(err => {
            console.log(err)
        })
    },
}
</script>

<style scoped>
</style>