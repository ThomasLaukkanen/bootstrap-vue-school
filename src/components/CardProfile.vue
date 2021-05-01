<template>
  <div>
    <b-card
      :title="title"
      :img-src="img"
      img-top
      style="max-width: 15rem"
      class="mb-2"
      :sub-title="subtitle"
    >
      <b-card-text>
        {{ text }}
        
      </b-card-text>

      <b-button @click="vibrate()" v-b-modal="'modalen' + theKey" href="#" variant="primary">Läs mer</b-button>
    </b-card>
    <b-modal :id="'modalen' + theKey" :title="title" button-size="sm"
          
          ok-only
          size="s"
          centered
           >
          <h2>Information</h2>
    <p class="mb-5">Kontakta <a href="mailto:findEmail">{{findEmail}}</a> </p>
  </b-modal>
  </div>
</template>

<script>


export default {
  name: 'CardProfile',
  data() {
    return {
      formatedemail: ""
    
    }
  },
  props: {
    title: String,
    img: String,
    text: String,
    subtitle: String,
    theKey: String,
    email: Array
  },
  methods: {
    vibrate() {
  console.log(this.email);
  if (navigator.vibrate) {
    window.navigator.vibrate(200);
    }
// console.log(this.email.find(objekt => objekt.uppgift[0] === /riksdagen/).uppgift[0] )
   return window.navigator.vibrate(1);
      }
    },
    computed: {
      findEmail() {
        let email = this.email.find(objekt => objekt.kod  === "Officiell e-postadress" ).uppgift[0].replace("[på]", "@")
       
      return email

      }
    }
}
</script>

<style></style>
