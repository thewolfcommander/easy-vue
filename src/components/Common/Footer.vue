<template>
    <v-footer
        light
        padless
    >
        <v-card
            flat
            tile
            width="100%"
            class="grey lighten-5 primary--text text-center"
        >
            <v-card-text>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 primary--text"
                    icon
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="pt-0">
                <v-container>
                    <v-row justify="space-between">
                        <v-col
                            cols="12"
                            md="3"
                            lg="3"
                        >
                            <v-row justify="start">
                                <p class="title ml-5">Services</p>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'Menu'}"
                                    >All Food Items</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'Restaurants'}"
                                    >Restaurants</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'Categories'}"
                                    >Food Categories</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'GroceryHome'}"
                                    >Groceries</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col
                            cols="12"
                            md="3"
                            lg="3"
                        >
                            <v-row justify="start">
                                <p class="title ml-5">Quick Links</p>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'Report'}"
                                    >Report an Issue</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'PrivacyPolicy'}"
                                    >Privacy Policy</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'PartnerRelations'}"
                                    >Partner Relations</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'TermsOfService'}"
                                    >Terms of Service</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col
                            cols="12"
                            md="3"
                            lg="3"
                        >
                            <v-row justify="start">
                                <p class="title ml-5">Resources</p>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'About'}"
                                    >About Us</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'Contact'}"
                                    >Contact Us</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                    >About Developer</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'JoinAsVendor'}"
                                    >Join as Vendor</v-btn>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="text-left ml-n2 my-0 py-0"
                                >
                                    <v-btn
                                        text
                                        color="primary"
                                        router
                                        :to="{name:  'JoinAsDeliveryBoy'}"
                                    >Join as Delivery Partner</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col
                            cols="12"
                            md="3"
                            lg="3"
                        >
                            <v-row justify="start">
                                <p class="title ml-5">Newsletter</p>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="primary--text">
                {{ new Date().getFullYear() }} — Exclusive &copy; <strong><a
                        href="https://www.rightbros.co"
                        target="_blank"
                        class="text-decoration-none secondary--text"
                    >Rightbros.co</a></strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    })
};
</script>