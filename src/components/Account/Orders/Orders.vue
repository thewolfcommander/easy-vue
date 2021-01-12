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

        <v-col cols="12" v-if="loading" class="text-center">
            <v-row justify="center">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import axios from "axios";
import NormalSmallOrderCard from "@/components/Account/Orders/NormalSmallOrderCard";

export default {
    data() {
        return {
            orders: [],
            loading: true,
        };
    },
    components: {
        NormalSmallOrderCard,
    },

    created() {
        this.$store.dispatch("startLoading");
        axios({
            url: `${this.$store.state.apiUrl}orders/all/?user=${this.$store.getters.getUser.id}`,
            method: `GET`,
            headers: {
                Authorization: `Bearer ${this.$store.getters.getToken}`,
            },
        })
            .then((response) => {
                this.$store.dispatch("stopLoading");
                this.orders = response.data;
                this.loading = false
            })
            .catch((err) => {
                this.$store.dispatch("stopLoading");
                console.log(err);
                this.loading = false
            });
    },
};
</script>