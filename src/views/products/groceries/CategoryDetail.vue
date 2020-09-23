<template>
    <v-container fluid>
        <v-container>
            <v-row justify="center">
                <v-btn
                    color="grey"
                    rounded
                    outlined
                    @click="$router.go(-1)"
                >Go Back</v-btn>
            </v-row>
            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">{{ category.name }}</h2>
                </v-col>
                <v-col cols="12">
                    <v-row justify="center">
                        <v-img
                            :src="category.image ? category.image : `https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`"
                            lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                            aspect-ratio="1"
                            class="grey lighten-2"
                            height="300"
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
                </v-col>
            </v-row>
            <v-row
                justify="center"
                class="d-none d-md-flex"
            >
                <v-col cols="12">
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
                        <v-row wrap>
                            <v-col
                                cols="6"
                                md="3"
                                lg="3"
                                v-for="(item, index) in items"
                                :key="index"
                            >
                                <GrocerySubCategoryCard :item="item" />
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <v-row
                justify="center"
                class="d-flex d-md-none"
            >
                <v-col cols="12">
                    <v-card
                        flat
                        class="px-md-5 px-lg-5"
                    >
                        <v-row wrap>
                            <v-col
                                cols="6"
                                md="3"
                                lg="3"
                                v-for="(item, index) in items"
                                :key="index"
                            >
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
import axios from "axios";
import GrocerySubCategoryCard from "@/components/Common/GrocerySubCategoryCard";
import SmallGrocerySubCategoryCard from "@/components/Common/Mobile/SmallGrocerySubCategoryCard";

export default {
    components: {
        GrocerySubCategoryCard,
        SmallGrocerySubCategoryCard,
    },
    data() {
        return {
            category: {
                id: "",
                name: "loading...",
            },
            items:
                JSON.parse(localStorage.getItem("grocerySubCategories")) || [],
        };
    },
    created() {
        axios({
            url: `${this.$store.state.apiUrl}grocery/categories/${this.$route.params.categoryId}/`,
            method: "GET",
        })
            .then((response) => {
                this.category.name = response.data.name;
                this.category.id = response.data.id;
                this.category.image = response.data.image;
                // console.log(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
    },

    mounted() {
        axios({
            url: `${this.$store.state.apiUrl}grocery/sub-categories/?active=true&category=${this.$route.params.categoryId}`,
            method: "GET",
        })
            .then((response) => {
                this.items = response.data.results;
                console.log(response);
                localStorage.setItem(
                    "grocerySubCategories",
                    JSON.stringify(response.data.results)
                );
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style scoped>
</style>