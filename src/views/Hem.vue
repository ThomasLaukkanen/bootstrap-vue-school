<template>
  <div class="home">
    <p :key="politiker" v-for="politiker in $store.state.politiker">
      {{ politiker }}
    </p>

    <b-button @click="onClick" variant="primary">Ändra värde</b-button>
    <HelloWorld msg="Hjälp till att skapa drömstaden Göteborg!" />
    <SearchField />
    <UUUID />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SearchField from '@/components/SearchField.vue'
import UUUID from '@/components/UUUID.vue'

export default {
  name: 'Hem',
  components: {
    HelloWorld,
    SearchField,
    UUUID,
  },
  methods: {
    onClick() {
      this.$store.commit('addNameToList', 'email')
    },
  },
}
</script>
