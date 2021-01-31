<template>
  <b-container>
    <AddComments @my-event="theEvent" />
    <CardProfile title="Thomas Laukkanen" text="Blablabla" />
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
        'https://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=G%C3%B6teborgs+kommun&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista='
      )
      .then((response) =>
        this.$store.commit('addNameToList', response.data.personlista.person)
      )
  },
}
</script>

<style></style>
