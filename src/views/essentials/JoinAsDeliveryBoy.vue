<template>
    <v-container
        class=""
        fluid
    >
        <v-card flat>
            <v-toolbar
                color="primary"
                class="back-tool"
                dark
                extended
                height="80"
                tile
                flat
            >
            </v-toolbar>

            <v-card
                class="mx-auto"
                max-width="700"
                tile
                style="margin-top: -64px;"
            >
                <v-toolbar flat>
                    <v-row justify="center">
                        <v-toolbar-title class="grey--text headline">{{ page_title }}</v-toolbar-title>
                    </v-row>
                </v-toolbar>
                <v-divider></v-divider>

                <v-card-text style="min-height: 200px;">
                    <v-row
                        justify="center"
                        class="mx-2 my-5"
                    >{{ description }}</v-row>

                    <v-row justify="center">
                        <v-col
                            cols="12"
                            md="8"
                            lg="8"
                        >
                            <v-card
                                flat
                                max-width="800px"
                            >
                                <v-row wrap>
                                    <v-col
                                        cols="12"
                                        md="12"
                                    >
                                        <v-text-field
                                            outlined
                                            rounded
                                            required
                                            v-model="business_email"
                                            label="Your Email*"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="12"
                                    >
                                        <v-text-field
                                            outlined
                                            rounded
                                            required
                                            v-model="business_phone"
                                            label="Your Phone Number*"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        md="12"
                                    >
                                        <v-text-field
                                            outlined
                                            rounded
                                            required
                                            v-model="address1"
                                            label="Address Line 1*"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        md="12"
                                    >
                                        <v-text-field
                                            outlined
                                            rounded
                                            v-model="address2"
                                            label="Address Line 2"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                        cols="12"
                                        md="6"
                                    >
                                        <v-text-field
                                            outlined
                                            rounded
                                            required
                                            v-model="city"
                                            label="City*"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="6"
                                    >
                                        <v-text-field
                                            outlined
                                            rounded
                                            disabled
                                            required
                                            v-model="state"
                                            label="State*"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="6"
                                    >
                                        <v-text-field
                                            outlined
                                            rounded
                                            disabled
                                            required
                                            v-model="country"
                                            label="Country*"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="6"
                                    >
                                        <v-text-field
                                            outlined
                                            rounded
                                            required
                                            v-model="pincode"
                                            label="Pincode*"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="12"
                                    >
                                        <v-text-field
                                            outlined
                                            rounded
                                            v-model="landmark"
                                            label="Landmark"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-row justify="end">
                                            <v-btn
                                                large
                                                class="mr-md-5 mr-lg-5 mt-n5"
                                                @click="sendMessage"
                                                color="secondary"
                                                rounded
                                            >Send</v-btn>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-snackbar
                        v-model="snackbar"
                        top
                        right
                        light
                    >
                        <p class="primary--text">{{ snack.text }}</p>

                        <template v-slot:action="{ attrs }">
                            <v-btn
                                :color="snack.color"
                                text
                                v-bind="attrs"
                                @click="snackbar = false"
                            >
                                Close
                            </v-btn>
                        </template>
                    </v-snackbar>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-text>
                    <v-row
                        justify="center"
                        class="my-5"
                    >
                        <v-btn
                            color="primary"
                            rounded
                            router
                            :to="{name: 'Home'}"
                        >Start Eating</v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            description:
                "If you want to deliver food with us. Please join here.",
            page_title: "Join us as Delivery Partner",
            business_phone: null,
            business_email: null,
            address1: null,
            address2: null,
            city: "Srinagar Garhwal",
            landmark: null,
            state: "uttarakhand",
            country: "india",
            pincode: "246174",
            snackbar: false,
            snack: {
                text: "Error: All Fields should be entered.",
                color: "secondary",
            },
        };
    },

    methods: {
        sendMessage() {
            if (this.business_phone && this.business_email && this.pincode) {
                console.log("Submitted COntact Form");
                this.snackbar = false;
            } else {
                this.snackbar = true;
            }
        },
    },
};
</script>