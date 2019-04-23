<template>
    <div id="app">
        <v-app id="inspire">
            <v-container>
                <v-layout row wrap>
                <v-flex xs5 >
                    <v-text-field
                            label="Поиск врача"
                            v-model="search"
                            append-outer-icon="search"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-list class="custom-doctor-list" two-line>
                    <transition-group
                            name="staggered-fade"
                            v-bind:css="false"
                            v-on:before-enter="beforeEnter"
                            v-on:enter="enter"
                            v-on:leave="leave"
                    >
                    <template v-for="(doctor, index) in filteredList">
                        <v-list-tile class="mb-3 elevation-1" :key="index">
                            <v-list-tile-content>
                                <v-list-tile-title v-html="doctor.title"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="doctor.subtitle"></v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-btn color="primary">Записаться</v-btn>
                        </v-list-tile>
                    </template>
                    </transition-group>
                </v-list>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "Aralan",

        data() {
            return {
                search: '',
                header: [
                    {
                        title: 'doctors (100g serving)',
                        align: 'left',
                        subtitle: 'subtitle'
                    }
                ],
                doctors: [
                    {
                        title: 'Эндокринолог',
                        subtitle: "Запись только по направлению."
                    },
                    {
                        title: 'Педиатор',
                        subtitle: "Свободная запись."
                    },
                    {
                        title: 'Хиррург',
                        subtitle: "Свободная запись."
                    },
                    {
                        title: 'Артопед',
                        subtitle: "Свободная запись."
                    },
                    {
                        title: 'Невролог',
                        subtitle: "Свободная запись."
                    },
                    {
                        title: 'Окулист',
                        subtitle: "Запись только по направлению."
                    },
                    {
                        title: 'Терапевт',
                        subtitle: "Свободная запись."
                    },
                    {
                        title: 'Уролог',
                        subtitle: "Свободная запись."
                    },
                    {
                        title: 'Офтальмолог',
                        subtitle: "Свободная запись."
                    },
                    {
                        title: 'Отоларинголог',
                        subtitle: "Свободная запись."
                    },
                    {
                        title: 'Фтизиатр',
                        subtitle: "Свободная запись."
                    },
                    {
                        title: 'Психотерапевт',
                        subtitle: "Запись только по направлению."
                    },
                ]
            }
        },
        methods: {
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
        },
        computed: {
            filteredList() {
                return this.doctors.filter(doctor => {
                    return doctor.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }
</script>

<style>
    .v-list.custom-doctor-list {
        background: transparent !important;
    }

    .v-list.custom-doctor-list > div {
        background-color: #fff !important;
    }
</style>