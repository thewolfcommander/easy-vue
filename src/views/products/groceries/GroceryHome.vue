<template>
    <v-container
        style="min-height: 400px"
    >
        <Header />
        <GroceryCategories />
        <GrocerySubCategories />
        <Groceries />
    </v-container>
</template>

<script>
import Header from "@/components/Home/Header";
import Groceries from "@/components/Home/Groceries";
import GroceryCategories from "@/components/Grocery/GroceryCategories";
import GrocerySubCategories from "@/components/Grocery/GrocerySubCategories";

export default {
    components: {
        Header,
        Groceries,
        GrocerySubCategories,
        GroceryCategories
    }
};
</script>
