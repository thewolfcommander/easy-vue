<template>
    <v-row wrap>
        <v-col
            cols="6"
            md="4"
            lg="4"
            v-for="(item, index) in orders"
            :key="index"
        >
            <NormalSmallOrderCard
                :item="item"
                :status="status"
                v-if="status === 'created' "
            />
            <NormalSmallOrderCardForShip
                :item="item"
                :status="status"
                v-if="status === 'shipped' "
                @reRender="reload"
            />
            <NormalSmallOrderCardForDeliver
                :item="item"
                :status="status"
                v-if="status === 'delivered' || status === 'cancelled' "
            />
        </v-col>
    </v-row>
</template>

<script>
import axios from "axios";
import NormalSmallOrderCard from "@/components/Account/DBOrders/NormalSmallOrderCard";
import NormalSmallOrderCardForShip from "@/components/Account/DBOrders/NormalSmallOrderCardForShip";
import NormalSmallOrderCardForDeliver from "@/components/Account/DBOrders/NormalSmallOrderCardForDeliver";

export default {
    data() {
        return {
            orders: [],
        };
    },
    props: ["status"],
    components: {
        NormalSmallOrderCard,
        NormalSmallOrderCardForShip,
        NormalSmallOrderCardForDeliver,
    },

    created() {
        this.$store.dispatch("startLoading");
        axios({
            url: `https://www.easyeats.co.in/api/v1/orders/all/?status=${this.status}`,
            method: `GET`,
            headers: {
                Authorization: `Token ${this.$store.getters.getToken}`,
            },
        })
            .then((response) => {
                this.orders = response.data;
                this.$store.dispatch("stopLoading");
            })
            .catch((err) => {
                this.$store.dispatch("stopLoading");
                console.log(err);
            });
    },

    methods: {
        reload() {
            this.$store.dispatch("startLoading");
            axios({
                url: `https://www.easyeats.co.in/api/v1/orders/all/?status=${this.status}`,
                method: `GET`,
                headers: {
                    Authorization: `Token ${this.$store.getters.getToken}`,
                },
            })
                .then((response) => {
                    this.orders = response.data;
                    this.$store.dispatch("stopLoading");
                })
                .catch((err) => {
                    this.$store.dispatch("stopLoading");
                    console.log(err);
                });
        },
    },
};
</script>