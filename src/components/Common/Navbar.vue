<template>
    <nav class="navbar">
        <v-app-bar
            fixed
            color="white"
            elevate-on-scroll
            height="75px"
            light
        >
            <v-app-bar-nav-icon class="d-flex d-md-none"></v-app-bar-nav-icon>
            <v-toolbar-title>
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
                icon
                color="primary"
                @click="refresh()"
            >
                <v-icon>mdi-reload</v-icon>
            </v-btn>

            <v-btn
                router
                :to="{name:  'Wishlist'}"
                icon
                v-if="this.$store.getters.getVersion"
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
                router
                :to="{name: 'Search'}"
            >
                <v-icon>mdi-magnify</v-icon>
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
            <v-btn
                text
                rounded
                router
                :to="{name:  'Home'}"
                color="primary"
                class="d-none d-md-flex mx-1"
            >Home</v-btn>
            <!-- <v-btn
                text
                rounded
                router
                :to="{name: 'GroceryHome'}"
                color="primary"
                class="d-none d-md-flex mx-1"
            >Groceries</v-btn> -->

            <!-- <v-menu
                offset-y
                open-on-hover
                class="d-none d-md-flex mx-1"
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                        text
                        rounded
                        v-on="on"
                        color="primary"
                    >Explore
                        <v-icon right>mdi-arrow-down-drop-circle-outline</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        
                    </v-list-item>
                </v-list>
            </v-menu> -->
            <v-btn
                rounded
                v-for="(item, index) in items"
                :key="index"
                color="primary"
                text
                router
                :to="{name: item.routeName }"
            >{{ item.title }}</v-btn>
            <v-btn
                rounded
                color="primary"
                v-if="authenticated === false"
                router
                :to="{name:  'Register'}"
                class="mr-md-5 mr-lg-5 d-none d-md-flex"
            >Join Now</v-btn>
            <v-btn
                rounded
                v-else
                color="primary"
                outlined
                router
                :to="{name:  'Profile'}"
                class="mr-md-5 mr-lg-5"
            >Me</v-btn>

        </v-app-bar>
    </nav>
</template>

<script>
import { mapGetters} from "vuex"; 
export default {
    data: () => ({
        items: [
            { title: "Food Menu", routeName: "Menu" },
            { title: "Restaurants", routeName: "Restaurants" },
            // { title: "Food Categories", routeName: "Categories" },
            // { title: "Grocery Menu", routeName: "GroceryMenu" },
            // { title: "Grocery Categories", routeName: "GroceryCategories" },
            // { title: "Grocery Sub Categories", routeName: "SubCategories" }
        ],
    }),

    methods: {
        logout() {
            this.$store
                .dispatch("logoutUser")
                .then(() => {
                    this.$router.push({ name: "Login" });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        refresh() {
            this.$router.go();
        },
    },

    computed:  {
        ...mapGetters(["getCartItemsCount"]),
        authenticated() {
            return this.$store.getters.isLoggedIn;
        },

        cartItems() {
            return this.getCartItemsCount;
        },

        wishlistItems() {
            if (this.$store.getters.getWishlistItemsCount) {
                return String(this.$store.getters.getWishlistItemsCount);
            } else {
                return "0";
            }
        },
    },
};
</script>