<template>
    <v-toolbar dark color="primary">
        <v-toolbar-title color="white">
            Doctor Pointer
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-menu offset-y class="mr-3" :nudge-width="100">
                <template slot='activator'>
                    <v-toolbar-title>
                        <v-badge class="d-flex custom-badge" left color="pink accent-3">
                            <template v-if="notification" slot="badge">
                                <span>6</span>
                            </template>
                            <v-icon dark>notifications_none</v-icon>
                        </v-badge>
                    </v-toolbar-title>
                </template>

                <v-list>

                </v-list>
            </v-menu>
            <v-btn to="/" flat>Записаться</v-btn>
            <v-btn to="/my-appointment" flat>Мои записи</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                notification: false
            }
        }
    }
</script>

<style>
    .custom-badge .v-badge__badge {
        position: static;
        font-size: 13px;
        height: 20px;
        width: 20px;
    }
</style>