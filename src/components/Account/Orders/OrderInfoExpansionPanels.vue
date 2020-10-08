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
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Foods</v-list-item-title>
                    <v-list-item-subtitle>
                        <v-row justify="start" wrap>
                            
                            <v-col cols="6" sm="4" md="3" lg="3" v-for="(i,index) in info.foods" :key="index">
                                <OrderFoodCard :item="i" />
                            </v-col>
                        </v-row>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Groceries</v-list-item-title>
                    <v-list-item-subtitle>
                        <v-row justify="start" wrap>
                            <v-col cols="6" sm="4" md="3" lg="3" v-for="(i,index) in info.groceries" :key="index">
                                <OrderGroceryCard :item="i" />
                            </v-col>
                        </v-row>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
import OrderFoodCard from '@/components/Account/Orders/OrderFoodCard'
import OrderGroceryCard from '@/components/Account/Orders/OrderGroceryCard'
export default {
    props: ["item", "info"],
    components: {
        OrderGroceryCard,
        OrderFoodCard
    },
    data() {
        return {
            pros: [
                {key: "Total Items", value: this.info.count },
                {key: "Shipping", value: this.info.shipping },
                {key: "Sub total", value: this.info.sub_total },
                {key: "Total", value: this.info.total },
            ]
        }
    }
};
</script>