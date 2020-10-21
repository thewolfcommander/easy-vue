<template>
    <v-expansion-panel>
        <v-expansion-panel-header>{{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-list-item
                two-line
                v-for="pro in pros"
                :key="pro.key"
            >
                <v-list-item-content>
                    <v-list-item-title v-text="pro.key"></v-list-item-title>
                    <v-list-item-subtitle v-text="pro.value"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Foods</v-list-item-title>
                    <v-list-item-subtitle>
                            <v-list three-line>
                                 <v-row
                            justify="start"
                            wrap
                        >
                                <v-col
                                    cols="12"
                                        v-for="item in info.foods"
                                        :key="item.title"
                                    sm="6"
                                >
                                    <v-card
                                        class="pa-2"
                                    >
                                        <v-list-item>
                                            <v-list-item-avatar>
                                                <v-img
                                                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                                    lazy-src="https://fitmirchi.com/admin/assets/images/image_not_available.png"
                                                ></v-img>
                                            </v-list-item-avatar>

                                            <v-list-item-content>
                                                <v-list-item-title v-html="item.food.name"></v-list-item-title>
                                                <v-list-item-subtitle>
                                                    <router-link
                                                        :to="{name: 'RestaurantDetail', params: {restaurantId: item.food.restaurant.id }}"
                                                        class="text-decoration-none grey--text"
                                                    >{{ item.food.restaurant.name }}</router-link>
                                                </v-list-item-subtitle>
                                                <v-list-subtitle>&#8377; <strike class="grey--text caption">{{ item.food.gross_price }}</strike> {{ item.food.discount_price }} <span class="primary--text ml-3">x {{ item.quantity }}</span></v-list-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                </v-col>
                                 </v-row>
                            </v-list>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Groceries</v-list-item-title>
                    <v-list-item-subtitle>
                        <v-row
                            justify="start"
                            wrap
                        >
                            <v-col
                                cols="6"
                                sm="4"
                                md="3"
                                lg="3"
                                v-for="(i,index) in info.groceries"
                                :key="index"
                            >
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
import OrderGroceryCard from "@/components/Account/Orders/OrderGroceryCard";
export default {
    props: ["item", "info"],
    components: {
        OrderGroceryCard,
    },
    data() {
        return {
            pros: [
                { key: "Total Items", value: this.info.count },
                { key: "Shipping", value: this.info.shipping },
                { key: "Sub total", value: this.info.sub_total },
                { key: "Total", value: this.info.total },
            ],
        };
    },
};
</script>