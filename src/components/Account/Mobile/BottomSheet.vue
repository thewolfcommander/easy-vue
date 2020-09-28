<template>
    <div >
        <v-bottom-sheet v-model="sheet" class="d-flex d-md-none">
            <v-row class="transparent" justify="center" @click="sheet = false"><v-btn depressed fab color="white"><v-icon center color="black">mdi-window-close</v-icon></v-btn></v-row>
            <v-list>
                <v-subheader>Me</v-subheader>
                <v-list-item
                    v-for="tile in items"
                    :key="tile.text"
                    link
                    :to="{name: tile.routeName}"
                >
                    <v-list-item-avatar>
                        <v-avatar
                            size="32px"
                            tile
                        >
                            <v-icon center>{{ tile.icon }}</v-icon>
                        </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-title>{{ tile.text }}</v-list-item-title>
                </v-list-item>
                <v-list-item
                @click="signout"
                >
                    <v-list-item-avatar>
                        <v-avatar
                            size="32px"
                            tile
                        >
                            <v-icon center>mdi-exit-to-app</v-icon>
                        </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-title>Sign out</v-list-item-title>
                </v-list-item>

                <v-subheader v-if="isDeliveryBoyVerified">Delivery Profile</v-subheader>
                <div v-if="isDeliveryBoyVerified">
                    <v-list-item
                        v-for="tile in useful"
                        :key="tile.text"
                        link
                        :to="{name: tile.routeName}"
                    >
                        <v-list-item-avatar>
                            <v-avatar
                                size="32px"
                                tile
                            >
                                <v-icon center>{{ tile.icon }}</v-icon>
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-title>{{ tile.text }}</v-list-item-title>
                    </v-list-item>
                </div>
            </v-list>
        </v-bottom-sheet>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            { text: "Profile", icon: "mdi-face-profile", routeName: 'Profile'},
            { text: "Orders", icon: "mdi-clock" , routeName: 'Orders'},
            { text: "Settings", icon: "mdi-shield-half-full", routeName: 'Settings' },
        ],
        useful: [
            { text: "Delivery Profile", icon: "mdi-truck-delivery", routeName: 'DBProfile' },
            { text: "New Orders", icon: "mdi-cart-plus", routeName: 'DBOrders' },
            { text: "Shipped Orders", icon: "mdi-cart-outline", routeName: 'DBShippedOrders' },
            { text: "Completed Orders", icon: "mdi-cart", routeName: 'DBCompletedOrders' },
            { text: "Cancelled Orders", icon: "mdi-cart-off", routeName: 'DBCancelledOrders' },
            { text: "DB Settings", icon: "mdi-caravan", routeName: 'DBSettings' },
        ]
    }),
    props: ["sheet"],
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
    },

    computed: {

        
        isDeliveryBoyVerified() {
            return this.$store.getters.getUser.is_delivery
        },
    }
};
</script>
