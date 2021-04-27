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

      <b-button @click="vibrate()" :v-b-modal="theKey" href="#" variant="primary">Läs mer</b-button>
    </b-card>
    <b-modal :id="theKey" title="BootstrapVue">
    <p class="my-4">Here will all the info be

    </p>
  </b-modal>
  </div>
</template>

<script>


export default {
  name: 'CardProfile',
  props: {
    title: String,
    img: String,
    text: String,
    subtitle: String,
    theKey: String
  },methods: {
    vibrate() {
if (navigator.vibrate) {
    window.navigator.vibrate(200);
    
}

   return window.navigator.vibrate(1);
   

    }
  }
}
</script>

<style></style>
