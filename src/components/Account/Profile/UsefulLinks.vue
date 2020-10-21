<template>
    <v-row wrap>
        <v-col cols="12" sm="6" md="4" lg="4" class="px-5 py-sm-0" v-for="item in items" :key="item.text">
            <v-btn color="black" outlined block tile v-text="item.text" router :to="{name: item.routeName }"></v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {text: "Food Menu", routeName: "Menu"},
                {text: "Restaurants", routeName: "Restaurants"},
                {text: "Food Categories", routeName: "Categories"},
                // {text: "Grocery Items", routeName: "GroceryMenu"},
                // {text: "Grocery Categories", routeName: "GroceryCategories"},
                // {text: "Grocery Sub Categories", routeName: "SubCategories"},
                {text: "Report an Issue", routeName: "Report"},
                {text: "Privacy Policy", routeName: "PrivacyPolicy"},
                {text: "Partner Relations", routeName: "PartnerRelations"},
                {text: "About Us", routeName: "About"},
                {text: "Contact Us", routeName: "Contact"},
                {text: "About Developer", routeName: "Developer"},
                {text: "Join as Vendor", routeName: "JoinAsVendor"},
                {text: "Join as Delivery Partner", routeName: "JoinAsDeliveryBoy"},
                {text: "Offers", routeName: "Offers"},
                {text: "Newsletter", routeName: "Newsletter"},
                {text: "Rewards", routeName: "Rewards"},
            ]
        }
    }
}
</script>