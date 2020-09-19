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
import MobileHeader from "@/components/Home/Mobile/Header";
import lazyLoadComponent from '@/utils/lazy-load-component';

import Loading from '@/components/Common/Loading'
import SkeletonLoader from '@/components/SkeletonLoader'

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
        }, 3000)
    },
    components: {
        Loading,
        Header,
        FeaturedProducts: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/FeaturedProducts'),
            loading: SkeletonLoader,
        }),
        TopRestaurants: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/TopRestaurants'),
            loading: SkeletonLoader,
        }),
        Categories: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/Categories'),
            loading: SkeletonLoader,
        }),
        Foods: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/Foods'),
            loading: SkeletonLoader,
        }),
        Groceries: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/Groceries'),
            loading: SkeletonLoader,
        }),
        RestaurantForm: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/RestaurantForm'),
            loading: SkeletonLoader,
        }),
        MobileHeader,
        MobileFeaturedProducts: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/Mobile/FeaturedProducts'),
            loading: SkeletonLoader,
        }),
        MobileTopRestaurants: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/Mobile/TopRestaurants'),
            loading: SkeletonLoader,
        }),
        MobileCategories: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/Mobile/Categories'),
            loading: SkeletonLoader,
        }),
        MobileFoods: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/Mobile/Foods'),
            loading: SkeletonLoader,
        }),
        MobileGroceries: lazyLoadComponent({
            componentFactory: () => import('@/components/Home/Mobile/Groceries'),
            loading: SkeletonLoader,
        }),
    }
};
</script>

