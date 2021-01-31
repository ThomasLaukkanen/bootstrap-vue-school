<template>
  <b-container>
    <AddComments @my-event="theEvent" />
    <h2>
      Det finns totalt {{ $store.state.politiker.length }} Politiker i Göteborg
    </h2>
    <b-row>
      <b-card-group deck>
        <CardProfile
          :key="person.hangar_guid"
          v-for="person in $store.state.politiker"
          :title="person.tilltalsnamn + ' ' + person.efternamn"
          :text="person.status"
          :img="person.bild_url_max"
          :subtitle="person.parti"
        />
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
import CardProfile from '@/components/CardProfile.vue'
import AddComments from '@/components/AddComments.vue'
import axios from 'axios'
export default {
  name: 'Politik',
  components: {
    CardProfile,
    AddComments,
  },
  methods: {
    theEvent() {
      // alert('hej')
      console.log('a custom event from addComments')
    },
  },
  created() {
    axios
      .get(
        'https://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=G%C3%B6teborgs+kommun&rdlstatus=&org=&utformat=json&sort=parti&sortorder=asc&termlista='
      )
      .then((response) =>
        this.$store.commit('addNameToList', response.data.personlista.person)
      )
  },
}
</script>

<style></style>
