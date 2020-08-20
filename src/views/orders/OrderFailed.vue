<template>

    <v-container fluid>
        <v-row
            wrap
            justify="center"
        >
            <v-card
                class="pa-4"
                flat
            >
                <v-btn
                    depressed
                    outlined
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'Cart'}"
                    disabled
                >Cart</v-btn>
                <v-btn
                    depressed
                    outlined
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'Addresses'}"
                    disabled
                >Address</v-btn>
                <v-btn
                    depressed
                    outlined
                    rounded
                    small
                    color="secondary"
                    router
                    :to="{name: 'CheckoutHome'}"
                    disabled
                >Confirm</v-btn>
                <v-btn
                    depressed
                    rounded
                    small
                    color="secondary"
                    disabled
                    router
                    :to="{name: 'OrderSuccess'}"
                >Created</v-btn>
            </v-card>
        </v-row>
        <v-container>

            <v-row justify="center">
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <h2 class="text-h4 grey--text">Sorry! Order failed</h2>
                </v-col>
            </v-row>
            <v-row justify="end" wrap>
                <v-col
                    cols="12"
                    sm="5"
                    md="3"
                    lg="3"
                >
                    <v-btn
                        color="primary"
                        tile
                        depressed
                        class="text-start"
                        x-large
                        router
                        :to="{name: 'Home'}"
                        width="100%"
                    >Continue Shopping</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>


<style scoped>
.mdi-chevron-down {
    color: transparent !important;
}
</style>