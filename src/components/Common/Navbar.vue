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
                <router-link :to="{name:  '/'}">
                    <v-img
                        src="brand/logo.png"
                        lazy-src="brand/logo.png"
                        max-width="120px"
                    ></v-img>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
                router
                :to="{name:  'wishlist'}"
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
                class="d-none d-md-flex mx-1"
                transition="slide-y-transition"
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
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn
                rounded
                color="primary"
                router
                :to="{name:  'Register'}"
                class="mr-md-5 mr-lg-5 d-none d-md-flex"
            >Join Now</v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Food Menu' },
        { title: 'Restaurants' },
        { title: 'Food Categories' },
        { title: 'Special Items' },
      ],
    }),
  }
</script>