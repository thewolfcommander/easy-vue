<template>
    <v-container
        fluid
        style="min-height: 400px"
    >
        <Header />
        <FeaturedProducts />
        <TopRestaurants />
        <Categories />
        <Foods />
        <Groceries />
        <RestaurantForm />
    </v-container>
</template>

<script>
import Header from "@/components/Home/Header";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import TopRestaurants from "@/components/Home/TopRestaurants";
import Categories from "@/components/Home/Categories";
import Foods from "@/components/Home/Foods";
import Groceries from "@/components/Home/Groceries";
import RestaurantForm from "@/components/Home/RestaurantForm";

export default {
    components: {
        Header,
        FeaturedProducts,
        TopRestaurants,
        Categories,
        Foods,
        Groceries,
        RestaurantForm
    }
};
</script>
