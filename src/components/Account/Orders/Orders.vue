<template>
    <v-row wrap>
        <v-col
            cols="6"
            md="4"
            lg="4"
            v-for="(item, index) in orders"
            :key="index"
        >
            <NormalSmallOrderCard :item="item" />
        </v-col>
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
    </v-row>
</template>

<script>
import axios from 'axios'
import NormalSmallOrderCard from "@/components/Account/Orders/NormalSmallOrderCard";

export default {
    data() {
        return {
            dialog: false,
            orders: [],
        };
    },
    components: {
        NormalSmallOrderCard,
    },

    created() {
        this.dialog = true;
        axios({
            url: `https://www.easyeats.co.in/api/v1/orders/all/?user=${this.$store.getters.getUser.id}`,
            method: `GET`,
            headers: {
                Authorization: `Token ${this.$store.getters.getToken}`,
            },
        })
            .then((response) => {
                this.dialog = false;
                this.orders = response.data;
            })
            .catch((err) => {
                this.dialog = false;
                console.log(err);
            });
    },
};
</script>