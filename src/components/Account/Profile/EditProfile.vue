<template>
    <v-card
        flat
        max-width="450"
    >
        <v-card-title>Edit your personal details</v-card-title>
        <v-card-subtitle>You know you can edit your personal details here</v-card-subtitle>
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
                        v-model="profile.full_name"
                        label="Change your name"
                        outlined
                        rounded
                        color="primary"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="10"
                    class="py-0 my-0"
                >
                    <v-text-field
                        v-model="profile.email_address"
                        label="Change your email address"
                        outlined
                        rounded
                        color="primary"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="10"
                    class="py-0 my-0"
                >
                    <v-text-field
                        v-model="profile.mobile_number"
                        label="Change your mobile number"
                        outlined
                        rounded
                        color="primary"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="10"
                    class="py-0 my-0"
                >
                    <v-text-field
                        v-model="profile.username"
                        label="Change your username"
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
            profile: {
                full_name: null,
                mobile_number: null,
                email_address: null,
                username: null,
            }
        }
    }
};
</script>

<style>
</style>