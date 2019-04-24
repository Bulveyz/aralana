<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="dialog"
                width="600"
        >
            <template slot="activator">
                <v-btn color="primary">Подробнее</v-btn>
            </template>

            <v-card>
                <v-card-title
                        class="headline primary white--text"
                >
                    Запись к {{ditails.doctor.title.toLowerCase()}}у
                </v-card-title>

                <v-card-text>
                    <v-list>
                        <v-list-tile>
                            <v-list-tile-avatar>
                                <v-icon>access_time</v-icon>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Дата примема: {{serializeDate()}} в {{ditails.time}}.</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile>
                            <v-list-tile-avatar>
                                <v-icon>meeting_room</v-icon>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Кабинет: {{ditails.doctor.office}}.</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile>
                            <v-list-tile-avatar>
                                <v-icon>person</v-icon>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Врач: {{ditails.doctor.full_name}}.</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            flat
                            @click="dialog = false"
                    >
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import business from 'moment-business';
    export default {
        name: "AppointmentDitailsDialog",
        props: {
            ditails: {
                type: Object
            }
        },
        data() {
            return {
                dialog: false,
            }
        },
        methods: {
            serializeDate() {
                return moment(this.ditails.date).format('DD.MM.YYYY');
            }
        }
    }
</script>

<style scoped>

</style>