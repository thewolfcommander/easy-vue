<template>
    <v-card
        class="mx-auto"
        style="z-index: 2"
        tile
        flat
        min-width="300"
    >
        <v-list shaped>
            <v-subheader>ME</v-subheader>
            <v-list-item-group
                v-model="item"
                color="primary"
            >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    link
                    :to="{name: item.routeName}"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                @click="signout"
                >
                    <v-list-item-icon>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Sign out</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            <v-subheader>Delivery Profile</v-subheader>
            <v-list-item-group
                v-model="use"
                color="primary"
            >
                <v-list-item
                    v-for="(item, i) in useful"
                    :key="i"
                    link
                    :to="{name: item.routeName}"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        item: 0,
        use: 0,
        items: [
            { text: "Profile", icon: "mdi-face-profile", routeName: 'Profile'},
            { text: "Orders", icon: "mdi-clock" , routeName: 'Orders'},
            // { text: "Settings", icon: "mdi-shield-half-full", routeName: 'Settings' },
        ],
        useful: [
            // { text: "Delivery Profile", icon: "mdi-truck-delivery", routeName: 'DBProfile' },
            // { text: "New Orders", icon: "mdi-cart-plus", routeName: 'DBOrders' },
            // { text: "Shipped Orders", icon: "mdi-cart-outline", routeName: 'DBShippedOrders' },
            // { text: "Completed Orders", icon: "mdi-cart", routeName: 'DBCompletedOrders' },
            // { text: "Cancelled Orders", icon: "mdi-cart-off", routeName: 'DBCancelledOrders' },
            // { text: "DB Settings", icon: "mdi-caravan", routeName: 'DBSettings' },
        ]
    }),
    methods: {
        signout() {
            this.$store.dispatch('logoutUser')
            .then(() => {
                this.$router.push({name: 'Login'})
            })
            .catch(() => {
                alert("Some error occured")
            })
        }
    }
};
</script>