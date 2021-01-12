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
                                        v-for="item in item_computed.foods"
                                        :key="item.id"
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
                                                 <v-chip-group>
                                                          <v-chip 
                                                          color="primary"
                                                          :key="item.varientType"
                                                          >
                                                              {{`${item.varientType} ${item.food.name}`}}
                                                          </v-chip>
                                                      </v-chip-group>
                                                  
                                                     <v-chip-group>
                                                          <v-chip 
                                                          color="secondary"
                                                          v-for="extra_add in item.extrasAddonsList"
                                                          :key="extra_add.id"
                                                          >
                                                              {{extra_add.name}}
                                                          </v-chip>
                                                      </v-chip-group>
                                                  
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
import axios from 'axios';
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
            varient_type_value : 0,
            extra_addon_array : [],
            item_computed : {}
        };
    },
    created() {
        console.log(this.info);
        this.item_computed = this.info;
        this.info.foods.map((food,index)=> {
        if(parseInt(food.varient_type) !=0) {
               axios({
                url: `${this.$store.state.apiUrl}products/foods/varient/${parseInt(food.varient_type)}/`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${this.$store.getters.getToken}`,
                }
            }).then((res)=> {
                console.log(res.data)
                this.item_computed.foods[index].varientType = res.data.name
                //this.varient_type_value = res.data.name
            })
        }
            let extras_array = JSON.parse(food.extras_addon)
            if(extras_array.length>0) {
                extras_array.map((extra_value)=> {
                       axios({
                        url: `${this.$store.state.apiUrl}products/foods/extra/${parseInt(extra_value)}/`,
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${this.$store.getters.getToken}`,
                        }
                    }).then((res)=> {
                        this.item_computed.foods[index].extrasAddonsList = []
                        this.item_computed.foods[index].extrasAddonsList.push(res.data)
                        //this.extra_addon_array.push(res.data)
                        console.log(res.data)
                        console.log("ITEM COMPUTED", this.item_computed)
                        
                    })
                })
            }
        })
  }
};
</script>