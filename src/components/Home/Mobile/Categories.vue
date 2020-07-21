<template>
    <v-container
        fluid
        class="grey lighten-5"
    >
        <v-container class="py-5">
            <v-row wrap class="mx-0 px-0">
                <v-col cols="9">
                    <v-row justify="start" class="px-1">
                        <h4 class="text-h6 ml-4 grey--text">Categories</h4>
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <v-row justify="end">
                        <v-btn
                            text
                            small
                            rounded
                            router
                            :to="{name: 'Categories'}"
                            color="primary"
                            class="mt-1"
                        >Explore all</v-btn>
                    </v-row>
                </v-col>
                <v-col cols="12" class="mt-n5">
                    <v-row wrap>
                        <v-col cols="6" md="4" lg="3" v-for="(item, index) in exItems" :key="index">
                            <SmallFoodCategoryCard />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios';

import SmallFoodCategoryCard from '@/components/Common/Mobile/SmallFoodCategoryCard'

export default {
    components: {
        SmallFoodCategoryCard
    },
    data() {
        return {
            items: JSON.parse(localStorage.getItem('categories')) || [],
        }
    },

    created() {
        axios({
            url: `https://www.easyeats.co.in/api/v1/products/categories/?active=true`,
            method: 'GET'
        })
        .then(response => {
            this.items = response.data.results
            localStorage.setItem('categories', JSON.stringify(response.data.results))
        })
        .catch(err => {
            console.log(err)
        })
    },

    computed: {
        exItems() {
            return this.items.slice(0, 4)
        }
    }
}
</script>