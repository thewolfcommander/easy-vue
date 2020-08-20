<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="400"
        >
            <v-card>
                <v-card-title class="grey lighten-2 headline primary--text">App Update - {{ this.$store.getters.getAppVersion }}</v-card-title>
                <v-card-text class="mt-2">

                    <v-list
                        two-line
                        subheader
                    >
                        <v-subheader>New Features</v-subheader>

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Improved UI</v-list-item-title>
                                <v-list-item-subtitle>Presenting you the best ever Material UI <br>to enhance your experience.</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Faster Flow</v-list-item-title>
                                <v-list-item-subtitle>The Best speed you can ever get to <br>order your food online.</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-divider></v-divider>
                    <v-list
                        two-line
                        subheader
                    >
                        <v-subheader>Problem Solving</v-subheader>

                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Items not Showing</v-list-item-title>
                                <v-list-item-subtitle>Click on the reload icon (<v-icon color="primary" small>mdi-reload</v-icon>) <br>on top to refresh the page</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="acceptUpdate()"
                    >Accept</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            items: [
                "Improved UI",
                "If not see anything on any page, Use the Reload button on top.",
            ],
        };
    },
    methods: {
        acceptUpdate() {
            this.$store.dispatch("acceptNewUpdate").then(() => {
                this.dialog = false;
            });
        },
    },
};
</script>