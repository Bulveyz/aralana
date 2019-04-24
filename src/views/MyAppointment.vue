<template>
    <v-container>
        <v-list three-line class="custom-doctor-list">
            <transition-group
                    name="staggered-fade"
                    v-bind:css="false"
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="leave"
            >
                <template v-for="(appointment, index) in appointments">
                    <v-list-tile class="mb-4 elevation-1" :key="index">
                        <v-list-tile-content>
                            <v-list-tile-title>{{appointment.action + ' к ' + appointment.doctor.title.toLowerCase() + 'у'}}
                                <sup v-if="appointment.status == 'await'" class="yellow" style="border-radius: 20px; padding: 0px 5px">
                                    <span>В ожидании</span>
                                </sup>
                            </v-list-tile-title>
                        </v-list-tile-content>

                        <v-btn @click="cancleAppointment(index)" color="primary" flat>Отменить запись</v-btn>

                        <!-- Ditails -->
                        <appointment-ditails-dialog :ditails="appointment"></appointment-ditails-dialog>
                        <!-- End Ditails -->
                    </v-list-tile>
                </template>
            </transition-group>
        </v-list>

        <!--<template v-for="(history, index) in historys">-->
            <!--<v-list-tile class="mb-4 elevation-1" :key="index">-->
                <!--<v-list-tile-avatar class="badge-indicator">-->
                    <!--<v-badge color="blue">-->
                        <!--<template v-slot:badge>-->
                            <!--<span class="text-primary">.</span>-->
                        <!--</template>-->
                    <!--</v-badge>-->
                <!--</v-list-tile-avatar>-->
                <!--<v-list-tile-content>-->
                    <!--<v-list-tile-title v-html="history.title"></v-list-tile-title>-->
                    <!--<v-list-tile-sub-title v-html="history.subtitle"></v-list-tile-sub-title>-->
                <!--</v-list-tile-content>-->
            <!--</v-list-tile>-->
        <!--</template>-->
    </v-container>
</template>

<script>
    import AppointmentDitailsDialog from "../components/AppointmentDitailsDialog";
    export default {
        name: "DotctorsList",
        components: {AppointmentDitailsDialog},
        data() {
            return {
                appointments: [
                    {
                        status: 'active',
                        action: 'Запись',
                        date: '2019-05-16',
                        time: "16:20",
                        doctor: {
                            full_name: "Абдухасова Гульмира Арлановна",
                            office: "14",
                            subtitle: "Запись только по направлению.",
                            title: "Эндокринолог"
                        }
                    },
                    {
                        status: 'await',
                        action: 'Запись',
                        date: '2019-04-26',
                        time: "12:00",
                        doctor: {
                            full_name: "Марат Сериков",
                            office: "17",
                            subtitle: "Запись только по направлению.",
                            title: "Терапевт"
                        }
                    }
                ]
            }
        },
        methods: {
            cancleAppointment(index) {
                Event.fire('appointment', {
                    doctor: this.appointments[index].doctor,
                    date: this.appointments[index].date,
                    action: 'Отмена запси',
                    time: this.appointments[index].time
                })

                this.appointments.splice(index, 1);
            },
            beforeEnter: function (el) {
                el.style.opacity = 0
                el.style.height = 0
                el.style.overflowY = 'hidden'
            },
            enter: function (el, done) {
                var delay = el.dataset.index * 150
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 1, height: '72px' },
                        { complete: done }
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = el.dataset.index * 150
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 0, height: 0 },
                        { complete: done }
                    )
                }, delay)
            }
        }
    }
</script>

<style>
</style>