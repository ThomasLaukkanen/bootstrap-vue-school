<template>
  <div class="home">
    <p :key="politiker" v-for="politiker in $store.state.politiker">
      {{ politiker }}
    </p>

    <b-button @click="onClick" variant="primary">Ändra värde</b-button>
    <HelloWorld msg="Gör Göteborg till en bättre stad!" />
    <SearchField />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SearchField from '@/components/SearchField.vue'

export default {
  name: 'Hem',
  components: {
    HelloWorld,
    SearchField,
  },
  methods: {
    onClick() {
      this.$store.commit('addNameToList', 'tjugosex')
    },
  },
}
</script>
