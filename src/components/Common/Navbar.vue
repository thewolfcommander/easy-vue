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
                    content="3"
                    value="3"
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
                v-if="!authenticated"
                router
                :to="{name:  'Login'}"
                class="mr-md-5 mr-lg-5 d-none d-md-flex"
            >Join Now</v-btn>

            <v-menu
                v-if="authenticated"
                offset-y
                class="d-none d-md-flex mx-1"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-avatar color="secondary" v-on="on" v-bind="attrs" style="cursor: pointer;">
                        <span class="caption white--text headline">{{ authenticated }}</span>
                    </v-avatar>
                </template>

                <v-list>
                    <v-list-item
                        v-for="(item, index) in account"
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
                    <v-list-item>
                        <v-btn
                            block
                            tile
                            depressed
                            color="white"
                            @click="logout"
                            class="primary--text"
                        >Sign Out</v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data: () => ({
        authenticated: function() {
            return this.$store.getters.isLoggedIn;
        },
        items: [
            { title: "Food Menu", routeName: "Menu" },
            { title: "Restaurants", routeName: "Restaurants" },
            { title: "Food Categories", routeName: "Categories" },
            { title: "Grocery Menu", routeName: "GroceryMenu" },
            { title: "Grocery Categories", routeName: "GroceryCategories" },
            { title: "Grocery Sub Categories", routeName: "SubCategories" }
        ],
        account: [
            {title: "My Account", routeName: "Profile"},
            {title: "IAM DBoy", routeName: "Profile"},
            {title: "IAM Admin", routeName: "Profile"},
            {title: "IAM Vendor", routeName: "Profile"},
        ]
    }),

    methods: {
        logout() {
            this.$store.dispatch('logoutUser')
            .then(() => {
                this.$route.push({name: 'Login'});
            })
            .catch(err => {
                console.log(err.message)
            }) 
        }
    }
};
</script>