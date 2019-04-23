<template >
    <div id="app">
  <v-app id="inspire">
    
    <v-layout>
      <v-flex sm10 offset-sm2>
        <v-card>
          <v-list three-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
              >
              
                {{ item.header }}
                <v-card-title>
                <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details>
                </v-text-field>
                </v-card-title>
              </v-subheader>
  
              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>
  
              <v-list-tile
                v-else
                :key="item.title"
                avatar
                @click=""
              >
                <v-list-tile-content>
                  <v-data-list-tile-title :headers="headers" :items="desserts" :search="search">
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-data-list-tile-title>
                </v-list-tile-content>
                <v-btn color="info">Records</v-btn>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</div>
</template>

<script>
    export default {
        name: "Aralan",
        
        data () {
    return {
      search: '',
       header: [
        {
          title: 'items (100g serving)',
          align: 'left',
          subtitle: 'subtitle'
        }
        ],
      items: [
        { header: 'Doctors list' },
        {
          title: 'Dermatologists',
          subtitle: "Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help."
        },
        { divider: true, inset: true },
        {
          title: 'Endocrinologists',
          subtitle: "These are experts on hormones and metabolism. They can treat conditions like diabetes, thyroid problems, infertility, and calcium and bone disorders."
        },
        { divider: true, inset: true },
        {
          title: 'Emergency Medicine Specialists',
          subtitle: "These doctors make life-or-death decisions for sick and injured people, usually in an emergency room. Their job is to save lives and to avoid or lower the chances of disability."
        },
        { divider: true, inset: true },
        {
          title: 'Family Physicians',
          subtitle: "They care for the whole family, including children, adults, and the elderly. They do routine checkups and screening tests, give you flu and immunization shots, and manage diabetes and other ongoing medical conditions."
        },
        { divider: true, inset: true },
        {
          title: 'Gastroenterologists',
          subtitle: "They’re specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder. You might see them for abdominal pain, ulcers, diarrhea, jaundice, or cancers in your digestive organs."
        },
        { divider: true, inset: true },
        {
          title: 'Geriatric Medicine Specialists',
          subtitle: "These doctors care for the elderly. They can treat people in their homes, doctors' offices, nursing homes, assisted-living centers, and hospitals."
        },
        { divider: true, inset: true },
        {
          title: 'Allergists/Immunologists',
          subtitle: "They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases."
        },
        { divider: true, inset: true },
        {
          title: 'Anesthesiologists',
          subtitle: "These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. They monitor your vital signs while you’re under anesthesia."
        },
        { divider: true, inset: true },
        {
          title: 'Cardiologists',
          subtitle: "They’re experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat."
        },
        { divider: true, inset: true },
        {
          title: 'Colon and Rectal Surgeons',
          subtitle: "You would see these doctors for problems with your small intestine, colon, and bottom. They can treat colon cancer, hemorrhoids, and inflammatory bowel disease. They also can do a colonoscopy and other tests for colon cancer."
        },
        { divider: true, inset: true },
        {
          title: 'Critical Care Medicine Specialists',
          subtitle: "They care for people who are critically ill or injured. You might see them if your heart or other organs are failing or if you’ve been in an accident."
        },
        { divider: true, inset: true }
      ]
    }
  }
}
</script>

<style scoped>
</style>