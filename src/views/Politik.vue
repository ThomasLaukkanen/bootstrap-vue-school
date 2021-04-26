<template>
  <b-container>
    <h1 id="special" v-if="this.$route.params.userName">
      Du är inloggad som {{ this.$route.params.userName }}
    </h1>
    <AddComments @my-event="theEvent" />

    <b-alert class="mt-4" v-if="customMessage !== ''" variant="success" show>{{
      customMessage
    }}</b-alert>
    <h2 class="mt-4">
      Det finns totalt {{ $store.state.politiker.length }} Politiker i Göteborg
    </h2>
    <b-row>
      <b-card-group deck class="d-flex justify-content-center   flex-wrap">
        <CardProfile
          class="m-2"
          :key="person.hangar_guid"
          v-for="person in $store.state.politiker"
          :title="person.tilltalsnamn + ' ' + person.efternamn"
          :text="person.status"
          :img="person.bild_url_max"
          :subtitle="person.parti"
          :theKey="person.hangar_guid"
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
      AddComments
    },
    data() {
      return {
        customMessage: ''
      }
    },
    methods: {
      theEvent() {
        this.customMessage = 'Din kommentar har lagts tills'
      }
    },
    watch: {
      customMessage() {
        setTimeout(() => (this.customMessage = ''), 3000)
      }
    },
    created() {
      axios
        .get(
          'https://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=G%C3%B6teborgs+kommun&rdlstatus=&org=&utformat=json&sort=parti&sortorder=asc&termlista='
        )
        .then((response) =>
          this.$store.commit('addNameToList', response.data.personlista.person)
        )
    }
  }
</script>

<style lang="scss" scoped>
  #special {
    color: rgb(9, 116, 255);
    text-decoration: underline;
  }
</style>
