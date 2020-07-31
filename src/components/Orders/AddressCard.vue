<template>
    <v-card
        class="mx-auto"
        light
        height="280"
    >
        <v-card-title>
            <v-icon left>
                mdi-cellphone
            </v-icon>
            <span class="subtitle-1 font-weight-bold">{{ address.name || "Home" }}</span>
        </v-card-title>

        <v-card-actions>
            <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                </v-list-item-avatar>
                <v-row
                    align="center"
                    justify="end"
                >
                    <v-btn
                        color="secondary"
                        depressed
                        dark
                        small
                        class="mx-3"
                    >Edit</v-btn>
                    <v-btn
                        color="primary"
                        depressed
                        dark
                        small
                        @click="selectAddress"
                    >Select</v-btn>
                </v-row>
            </v-list-item>
        </v-card-actions>

        <v-card-text class="subtitle-2">
            {{ address.address1 }}, {{ address.address2 }}, {{ address.city }}, {{ address.state }}, {{ address.country }} - {{ address.pincode }} <br> {{ address.mobile_number }}
        </v-card-text>

        <v-dialog
            v-model="dialog"
            hide-overlay
            persistent
            width="300"
            class="pt-4 pb-3"
        >
            <v-card
                color="white"
                dark
            >
                <v-card-text>
                    <span class="subtitle-2 primary--text">
                        Loading...
                    </span>
                    <v-progress-linear
                        indeterminate
                        color="primary"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        //
        dialog: false,
    }),
    props: ["address"],

    methods: {
        selectAddress() {
            this.dialog = true;
            this.$store
                .dispatch("billingAddressForOrder", this.address.id)
                .then(() => {
                    this.dialog = false;
                    this.$router.push({name: 'CheckoutHome'});
                })
                .catch((err) => {
                    this.dialog = false;
                    console.log(err);
                });
        },
    },
};
</script>