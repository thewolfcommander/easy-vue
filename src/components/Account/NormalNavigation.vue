<template>
    <v-card
        class="mx-auto"
        width="300"
    >
        <v-list>
            <v-list-group
                prepend-icon="mdi-face-profile"
                value="true"
            >
                <template v-slot:activator>
                    <v-list-item-title>Profile</v-list-item-title>
                </template>

                <v-list-item link class="text-center">
                    <v-list-item-title>Profile Home</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-title>Edit Profile</v-list-item-title>
                </v-list-item>
            </v-list-group>

            <v-list-group
                prepend-icon="mdi-account-circle"
                value="true"
            >
                <template v-slot:activator>
                    <v-list-item-title>Delivery boy</v-list-item-title>
                </template>

                <v-list-group
                    no-action
                    sub-group
                    value="true"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>Admin</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="(admin, i) in admins"
                        :key="i"
                        link
                    >
                        <v-list-item-title v-text="admin[0]"></v-list-item-title>
                        <v-list-item-icon>
                            <v-icon v-text="admin[1]"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>

                <v-list-group
                    sub-group
                    no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>Actions</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(crud, i) in cruds"
                        :key="i"
                    >
                        <v-list-item-title v-text="crud[0]"></v-list-item-title>
                        <v-list-item-action>
                            <v-icon v-text="crud[1]"></v-icon>
                        </v-list-item-action>
                    </v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        admins: [
            ["Management", "mdi-people-outline"],
            ["Settings", "mdi-settings"]
        ],
        cruds: [
            ["Create", "mdi-add"],
            ["Read", "mdi-insert-drive-file"],
            ["Update", "mdi-update"],
            ["Delete", "mdi-delete"]
        ],
        items: [
            { title: "My Profile", routeName: "Profile" },
            { title: "My Orders", routeName: "Orders" },
            { title: "Delivery Boy", routeName: "DBProfile" },
            { title: "Signout" }
        ]
    })
};
</script>