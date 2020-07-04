<template>
    <nav class="mobile-nav">
        <v-app-bar
      fixed
      height="65"
      color="white"
      elevate-on-scroll
    >
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
            <v-spacer></v-spacer>
            <v-toolbar-title class="ml-n5 mr-5">
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
        </v-app-bar>
    </nav>
</template>
