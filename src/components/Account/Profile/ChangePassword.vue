<template>
    <v-card
        flat
        max-width="450"
    >
        <v-card-title>Change Password</v-card-title>
        <v-card-subtitle>Choose a new password by entering your old password</v-card-subtitle>
        <v-card-actions>
            <v-row
                wrap
                justify="start"
            >
                <v-col
                    cols="10"
                    class="py-0 my-0"
                >
                    <v-text-field
                        v-model="old_pass"
                        label="Enter your old password"
                        outlined
                        rounded
                        color="primary"
                        type="password"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="10"
                    class="py-0 my-0"
                >
                    <v-text-field
                        v-model="new_pass"
                        label="Enter your new password"
                        outlined
                        rounded
                        color="primary"
                        type="password"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="10"
                    class="py-0 my-0"
                >
                    <v-text-field
                        v-model="confirm_pass"
                        label="Confirm your new password"
                        outlined
                        rounded
                        color="primary"
                    ></v-text-field>
                </v-col>
                <v-btn
                    color="primary"
                    rounded
                    large
                    class="ml-md-5"
                >Save</v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            old_pass: null,
            new_pass: null,
            confirm_pass: null
        }
    }
};
</script>

<style>
</style>