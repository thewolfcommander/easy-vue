<template>
    <v-container
        fluid
        style="min-height: 400px"
    >
        <Header class="d-none d-md-flex" />
        <FeaturedProducts class="d-none d-md-flex" />
        <TopRestaurants class="d-none d-md-flex" />
        <Categories class="d-none d-md-flex" />
        <Foods class="d-none d-md-flex" />
        <Groceries class="d-none d-md-flex" />
        
        <MobileHeader class="d-flex d-md-none" />
        <MobileFeaturedProducts class="d-flex d-md-none" />
        <MobileTopRestaurants class="d-flex d-md-none" />
        <MobileCategories class="d-flex d-md-none" />
        <MobileFoods class="d-flex d-md-none" />
        <MobileGroceries class="d-flex d-md-none" />
        <RestaurantForm />
        <Loading :dialog="dialog" />
    </v-container>
</template>

<script>
import Header from "@/components/Home/Header";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import TopRestaurants from "@/components/Home/TopRestaurants";
import Categories from "@/components/Home/Categories";
import Foods from "@/components/Home/Foods";
import Groceries from "@/components/Home/Groceries";

import MobileHeader from "@/components/Home/Mobile/Header";
import MobileFeaturedProducts from "@/components/Home/Mobile/FeaturedProducts";
import MobileTopRestaurants from "@/components/Home/Mobile/TopRestaurants";
import MobileCategories from "@/components/Home/Mobile/Categories";
import MobileFoods from "@/components/Home/Mobile/Foods";
import MobileGroceries from "@/components/Home/Mobile/Groceries";

import RestaurantForm from "@/components/Home/RestaurantForm";

import Loading from '@/components/Common/Loading'

export default {
    data() {
        return {
            dialog: false,
        }
    },
    created() {
        this.dialog = true;
        setTimeout(() => {
            this.dialog = false
        }, 2000)
    },
    components: {
        Loading,
        Header,
        FeaturedProducts,
        TopRestaurants,
        Categories,
        Foods,
        Groceries,
        RestaurantForm,
        MobileHeader,
        MobileFeaturedProducts,
        MobileTopRestaurants,
        MobileCategories,
        MobileFoods,
        MobileGroceries,
    }
};
</script>

