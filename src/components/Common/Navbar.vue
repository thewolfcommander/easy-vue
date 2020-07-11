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
                router
                :to="{name:  'Wishlist'}"
                icon
            >
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
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
            <v-btn
                text
                rounded
                router
                :to="{name: 'GroceryHome'}"
                color="primary"
                class="d-none d-md-flex mx-1"
            >Groceries</v-btn>

            <v-menu
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
                        <v-btn
                            block
                            tile
                            depressed
                            color="white"
                            class="primary--text"
                            router
                            :to="{name: item.routeName }"
                        >{{ item.title }}</v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn
                rounded
                color="primary"
                v-if="authenticated === false"
                router
                :to="{name:  'Login'}"
                class="mr-md-5 mr-lg-5 d-none d-md-flex"
            >Join Now</v-btn>
            <!-- <v-btn
                rounded
                v-else
                color="primary"
                outlined
                router
                :to="{name:  'Profile'}"
                class="mr-md-5 mr-lg-5"
            >Me</v-btn> -->
            <v-btn
            v-else
                icon
                color="primary"
                @click="logout"
            >
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>

        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data: () => ({
        items: [
            { title: "Food Menu", routeName: "Menu" },
            { title: "Restaurants", routeName: "Restaurants" },
            { title: "Food Categories", routeName: "Categories" },
            { title: "Grocery Menu", routeName: "GroceryMenu" },
            { title: "Grocery Categories", routeName: "GroceryCategories" },
            { title: "Grocery Sub Categories", routeName: "SubCategories" }
        ]
    }),

    methods: {
        logout() {
            this.$store
                .dispatch("logoutUser")
                .then(() => {
                    this.$router.push({ name: "Login" });
                })
                .catch(err => {
                    console.log(err.message);
                });
        }
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
        }
    }
};
</script>