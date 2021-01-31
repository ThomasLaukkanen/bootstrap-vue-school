<template>
  <b-container>
    <HelloWorld msg="Hjälp till att skapa drömstaden Göteborg!" />
    <SearchField />
  </b-container>
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
      this.$store.commit('addNameToList', 'email')
    },
  },
}
</script>
