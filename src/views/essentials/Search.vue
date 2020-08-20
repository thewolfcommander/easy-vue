<template>
    <v-container
        class=""
        fluid
    >
        <v-card flat>
            <v-toolbar
                color="primary"
                class="back-tool"
                dark
                extended
                height="80"
                tile
                flat
            >
            </v-toolbar>

            <v-card
                class="mx-auto"
                max-width="1200"
                tile
                style="margin-top: -64px;"
            >
                <v-toolbar flat>
                    <v-row justify="center">
                        <v-toolbar-title class="grey--text title">Search the best out there</v-toolbar-title>
                    </v-row>
                </v-toolbar>

                <v-col
                    cols="12"
                    md="12"
                    lg="12"
                >
                    <v-tabs
                        v-model="tab"
                        background-color="transparent"
                        color="primary"
                        grow
                    >
                        <v-tab>
                            Foods
                        </v-tab>

                        <v-tab>
                            Groceries
                        </v-tab>

                        <v-tab>
                            Restaurants
                        </v-tab>
                    </v-tabs>
                </v-col>

                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <SearchFoods />
                    </v-tab-item>
                    <v-tab-item>
                        <SearchGroceries />
                    </v-tab-item>
                    <v-tab-item>
                        <SearchRestaurants />
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-card>
    </v-container>
</template>
<script>
import SearchFoods from "@/components/Search/SearchFoods";
import SearchGroceries from "@/components/Search/SearchGroceries";
import SearchRestaurants from "@/components/Search/SearchRestaurants";
export default {
    data: () => ({
        descriptionLimit: 60,
        isLoading: false,
        model: null,
        search: null,
        tab: null,
    }),

    components: {
        SearchFoods,
        SearchGroceries,
        SearchRestaurants
    },

    methods: {
        
        
    },
};
</script>

<style scoped>
.back-tool {
    background: url(https://blog.pixlr.com/wp-content/uploads/2019/03/stars-pattern.png);
}

</style>
