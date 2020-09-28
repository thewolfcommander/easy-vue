<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list-item two-line v-for="pro in pros" :key="pro.key">
                <v-list-item-content>
                    <v-list-item-title v-text="pro.key"></v-list-item-title>
                    <v-list-item-subtitle v-text="pro.value"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    props: ["item", "info"],
    data() {
        return {
            pros: [
                {key: "Delivery Boy", value: this.info.delivery_boy },
                {key: "Order Total", value: this.info.total },
                {key: "Shipping Total", value: this.info.shipping_total },
                {key: "Restaurant Part", value: this.info.restaurant_part },
                {key: "Order Status", value: this.info.status.toUpperCase() },
            ]
        }
    }
};
</script>