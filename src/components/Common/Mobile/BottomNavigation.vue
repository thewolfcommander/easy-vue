<template>
    <v-bottom-navigation
        :value="activeBtn"
        grow
        fixed
        color="primary"
    >
        <v-btn router :to="{name: 'Home' }">
            <span class="caption">Home</span>
            <v-icon small>mdi-home</v-icon>
        </v-btn>

        <v-btn router :to="{name: 'Restaurants' }">
            <span class="caption">Restaurants</span>
            <v-icon small>mdi-google-maps</v-icon>
        </v-btn>

        <v-btn router :to="{name: 'Menu' }">
            <span class="caption">Menu</span>
            <v-icon small>mdi-food-fork-drink</v-icon>
        </v-btn>

        <!-- <v-btn router :to="{name: 'GroceryHome' }">
            <span class="caption">Groceries</span>
            <v-icon small>mdi-basket</v-icon>
        </v-btn> -->
        <v-btn router :to="{name: 'Profile' }">
            <span class="caption">Profile</span>
            <v-icon small>mdi-face</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    data() {
        return {
            activeBtn: 0
        };
    }
};
</script>