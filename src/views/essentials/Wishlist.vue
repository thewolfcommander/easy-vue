<template>
    <v-container
        fluid
        style="min-height: 400px"
    >
        <v-container>
            <v-card flat>

                <v-col cols="8" md="4" lg="4">
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
                </v-tabs>
                </v-col>

                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-row wrap>
                            <v-col
                            cols="6"
                            md="3"
                            lg="2"
                            v-for="(item, index) in 10"
                            :key="index"
                        >
                            <FoodCard />
                        </v-col>
                        </v-row>
                    </v-tab-item>
                    <v-tab-item>
                        <v-row wrap>
                            <v-col
                            cols="6"
                            md="3"
                            lg="2"
                            v-for="(item, index) in 10"
                            :key="index"
                        >
                            <GroceryCard />
                        </v-col>
                        </v-row>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-container>

    </v-container>
</template>

<script>
import FoodCard from "@/components/Common/Mobile/FoodCard";
import GroceryCard from "@/components/Common/Mobile/GroceryCard";

export default {
    data() {
        return {
            tab: null,
            items: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
            text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        };
    },
    components: {
        FoodCard,
        GroceryCard
    }
};
</script>
