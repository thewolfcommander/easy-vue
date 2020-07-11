<template>
    <v-container >
        <v-container >
            <v-row wrap justify="center">
                <v-col cols="12" md="3" lg="2" sm="6" v-for="item in items" :key="item.title">
                    <v-btn block rounded text color="primary" router :to="{name: item.routeName }">{{ item.title }}</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-container class="primary lighten-5">
            <v-row></v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {title: 'My Profile', routeName: 'Profile'},
                {title: 'My Orders', routeName: 'Orders'},
                {title: 'Delivery Boy', routeName: 'DBProfile'},
                {title: 'Signout'},
            ]
        }
    }
}
</script>