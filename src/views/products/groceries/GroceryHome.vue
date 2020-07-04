<template>
    <v-container
        style="min-height: 400px"
    >
        <Header class="d-none d-md-flex" />
        <GroceryCategories class="d-none d-md-flex" />
        <GrocerySubCategories class="d-none d-md-flex" />
        <Groceries class="d-none d-md-flex" />

        <MobileHeader class="d-flex d-md-none" />
        <MobileGroceryCategories class="d-flex d-md-none" />
        <MobileGrocerySubCategories class="d-flex d-md-none" />
        <MobileGroceries class="d-flex d-md-none" />
    </v-container>
</template>

<script>
import Header from "@/components/Home/Header";
import Groceries from "@/components/Home/Groceries";
import MobileHeader from "@/components/Home/Mobile/Header";
import MobileGroceries from "@/components/Home/Mobile/Groceries";
import GroceryCategories from "@/components/Grocery/GroceryCategories";
import GrocerySubCategories from "@/components/Grocery/GrocerySubCategories";
import MobileGroceryCategories from "@/components/Grocery/Mobile/GroceryCategories";
import MobileGrocerySubCategories from "@/components/Grocery/Mobile/GrocerySubCategories";

export default {
    components: {
        Header,
        Groceries,
        GrocerySubCategories,
        GroceryCategories,
        MobileGrocerySubCategories,
        MobileGroceryCategories,
        MobileHeader,
        MobileGroceries,
    }
};
</script>
