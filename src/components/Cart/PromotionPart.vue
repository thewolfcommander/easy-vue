<template>
    <v-row wrap>
        <v-col
            cols="12"
            class="text-start"
        >
            <p class="caption">If you have a promotion code, please enter it here:</p>
        </v-col>
        <v-col cols="9" class="inline">
            <v-text-field
                v-model="promo"
                outlined
                placeholder="Please Enter Promo Code"
                solo
                class="inline-field"
                full-width
                flat
            ></v-text-field>
            <v-btn
                depressed
                tile
                color="primary"
                class="inline-field-button"
            >Apply Discount</v-btn>
        </v-col>
        <v-col cols="3">
            <v-row wrap class="mt-n3">
                <v-col cols="12">
                    <v-btn color="primary" tile depressed class="text-start" x-large width="100%">Checkout</v-btn>
                </v-col>

                <v-col cols="12">
                    <v-btn color="grey" outlined tile depressed class="text-start" x-large width="100%">Login/Signup</v-btn>
                </v-col>

                <v-col cols="12">
                    <v-btn color="grey" outlined tile depressed class="text-start" x-large width="100%">Continue Shopping</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<style scoped>
.inline {
    position: relative;
}
.inline-field {
    height: 50px!important;
    border-radius: 0!important;
}
.inline-field-button {
    height: 55px!important;
    position: absolute;
    top: 12px;
    right: 12px;
    border-radius: 0!important;
}
</style>