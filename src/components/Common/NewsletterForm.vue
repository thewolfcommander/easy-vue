<template>
    <v-row
        align="center"
        justify="center"
    >
        <v-col
            cols="12"
        >
            <v-text-field
                v-model="email"
                outlined
                color="black"
                label="Email Address"
                required
            ></v-text-field>
            <v-row justify="center" class="mt-n5">
                <v-btn
                    color="primary"
                    rounded
                >Ping</v-btn>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            email: null,
        };
    },
};
</script>