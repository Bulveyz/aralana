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
                <v-list three-line>
                    <template v-for="(doctor, index) in filteredList">
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="doctor.title"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="doctor.subtitle"></v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-btn color="primary">Записаться</v-btn>
                        </v-list-tile>
                    </template>
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
                        title: 'Dermatologists',
                        subtitle: "Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help."
                    },
                    {
                        title: 'Endocrinologists',
                        subtitle: "These are experts on hormones and metabolism. They can treat conditions like diabetes, thyroid problems, infertility, and calcium and bone disorders."
                    },
                    {
                        title: 'Emergency Medicine Specialists',
                        subtitle: "These doctors make life-or-death decisions for sick and injured people, usually in an emergency room. Their job is to save lives and to avoid or lower the chances of disability."
                    },
                    {
                        title: 'Family Physicians',
                        subtitle: "They care for the whole family, including children, adults, and the elderly. They do routine checkups and screening tests, give you flu and immunization shots, and manage diabetes and other ongoing medical conditions."
                    },
                    {
                        title: 'Gastroenterologists',
                        subtitle: "They’re specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder. You might see them for abdominal pain, ulcers, diarrhea, jaundice, or cancers in your digestive organs."
                    },
                    {
                        title: 'Geriatric Medicine Specialists',
                        subtitle: "These doctors care for the elderly. They can treat people in their homes, doctors' offices, nursing homes, assisted-living centers, and hospitals."
                    },
                    {
                        title: 'Allergists/Immunologists',
                        subtitle: "They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases."
                    },
                    {
                        title: 'Anesthesiologists',
                        subtitle: "These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. They monitor your vital signs while you’re under anesthesia."
                    },
                    {
                        title: 'Cardiologists',
                        subtitle: "They’re experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat."
                    },
                    {
                        title: 'Colon and Rectal Surgeons',
                        subtitle: "You would see these doctors for problems with your small intestine, colon, and bottom. They can treat colon cancer, hemorrhoids, and inflammatory bowel disease. They also can do a colonoscopy and other tests for colon cancer."
                    },
                    {
                        title: 'Critical Care Medicine Specialists',
                        subtitle: "They care for people who are critically ill or injured. You might see them if your heart or other organs are failing or if you’ve been in an accident."
                    }
                ]
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

<style scoped>
</style>