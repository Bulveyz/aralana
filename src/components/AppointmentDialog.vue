<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="dialog"
                width="600"
        >
            <template slot="activator">
                <v-btn color="primary">Записаться</v-btn>
            </template>

            <v-card>
                <v-card-title
                        class="headline primary white--text"
                >
                    Запись к {{doctor.title}}
                </v-card-title>


                <v-card-text>

                    <v-dialog
                            ref="dialoge"
                            v-model="modalDatePicker"
                            :return-value.sync="date"
                            persistent
                            lazy
                            full-width
                            width="390px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                    v-model="date"
                                    label="Дата приема"
                                    prepend-icon="event"
                                    readonly
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker locale="ru" :min="today" :max="nextMonth" :allowed-dates="disabledDates()" color="primary" full-width v-model="date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="modalDatePicker = false">Отмена</v-btn>
                            <v-btn flat color="primary" @click="$refs.dialoge.save(date)">Выбрать</v-btn>
                        </v-date-picker>
                    </v-dialog>

                    <v-dialog
                            ref="dialog"
                            v-model="modalTimePicker"
                            :return-value.sync="time"
                            persistent
                            lazy
                            full-width
                            width="290px"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                    v-model="time"
                                    label="Время приема"
                                    prepend-icon="access_time"
                                    readonly
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-time-picker
                                v-if="modalTimePicker"
                                v-model="time"
                                locale="ru"
                                color="primary"
                                :min="minHours"
                                :max="maxHours"
                                format="24hr"
                                :allowed-minutes="allowedMinutes"
                                full-width
                        >
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="modalTimePicker = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                        </v-time-picker>
                    </v-dialog>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            flat
                            @click="dialog = false"
                    >
                        Отмена
                    </v-btn>
                    <v-btn
                            color="primary"
                            flat
                            @click="dialog = false"
                    >
                        Записаться
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import business from 'moment-business';
    export default {
        name: "AppointmentDialog",
        props: {
            doctor: {
                type: Object
            }
        },
        data() {
            return {
                dialog: false,
                modalDatePicker: false,
                modalTimePicker: false,
                today: moment().format('YYYY-MM-DD'),
                nextMonth: moment().add(1, 'months').format('YYYY-MM-DD'),
                disabledDatesArray:  [],
                time: '12:00',
                date: moment().format('YYYY-MM-DD'),
                minHours: '09:00',
                maxHours: '18:00',
                allowedMinutes: (m) => m % 10 == 0
            }
        },
        methods: {
            disabledDates() {
                return val => this.disabledDatesArray.indexOf(val) == -1
            },
            getWeekends() {
                let weekends = [];
                moment(this.today, 'YYYY-MM-DD').monthNaturalDays().forEach(date => {
                    if (!moment(date.format('YYYY-MM-DD')).isBusinessDay()) {
                        weekends.push(date.format('YYYY-MM-DD'));
                    }
                })

                moment(this.nextMonth, 'YYYY-MM-DD').monthNaturalDays().forEach(date => {
                    if (!moment(date.format('YYYY-MM-DD')).isBusinessDay()) {
                        weekends.push(date.format('YYYY-MM-DD'));
                    }
                })

                return weekends;
            }
        },
        mounted() {
            this.getWeekends().forEach(date => {
                this.disabledDatesArray.push(date);
            })
        }
    }
</script>

<style scoped>

</style>