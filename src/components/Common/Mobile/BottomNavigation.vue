<template>
    <v-bottom-navigation
        :value="activeBtn"
        grow
        fixed
        color="primary"
    >
        <v-btn>
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn>
            <span>Favorites</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
            <span>Nearby</span>
            <v-icon>mdi-map-marker</v-icon>
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