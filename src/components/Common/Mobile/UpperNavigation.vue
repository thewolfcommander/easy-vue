<template>
    <nav class="mobile-nav">
        <v-app-bar
            fixed
            height="65"
            color="white"
            elevate-on-scroll
        >

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title class="mr-n5 ml-5">
                <router-link :to="{name:  'Home'}">
                    <v-img
                        src="@/assets/brand/logo.png"
                        lazy-src="@/assets/brand/logo.png"
                        max-width="120px"
                    ></v-img>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                router
                :to="{name:  'Wishlist'}"
                icon
            >
                <v-badge
                    :content="wishlistItems"
                    :value="wishlistItems"
                    color="primary"
                    overlap
                >
                    <v-icon>mdi-heart</v-icon>
                </v-badge>
            </v-btn>
            <v-btn
                icon
                class="mr-md-5 mr-lg-5"
                router
                :to="{name: 'Cart' }"
            >
                <v-badge
                    :content="cartItems"
                    :value="cartItems"
                    color="secondary"
                    overlap
                >
                    <v-icon>mdi-cart</v-icon>
                </v-badge>
            </v-btn>
        </v-app-bar>
    </nav>
</template>


<script>
export default {
    data() {
        return {
            show: false,
            items: [
                { title: "Food Categories", routeName: "Categories" },
                { title: "Grocery Menu", routeName: "GroceryMenu" },
                { title: "Grocery Categories", routeName: "GroceryCategories" },
                { title: "Grocery Sub Categories", routeName: "SubCategories" },
                { title: "Contact Us", routeName: "Contact" },
                { title: "About Us", routeName: "About" },
                { title: "Report Issue", routeName: "Report" }
            ]
        };
    },
    computed: {
        authenticated() {
            return this.$store.getters.isLoggedIn
        },

        cartItems() {
            if (this.$store.getters.getCartItemsCount) {
                return String(this.$store.getters.getCartItemsCount)
            } else {
                return "0"
            }
        },

        wishlistItems() {
            if (this.$store.getters.getWishlistItemsCount) {
                return String(this.$store.getters.getWishlistItemsCount)
            } else {
                return "0"
            }
        }
    }
};
</script>