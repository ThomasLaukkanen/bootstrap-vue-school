<template>
  <b-container>
    <HelloWorld msg="Hjälp till att skapa drömstaden Göteborg!" />
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Hem',
  components: {
    HelloWorld,
  },
}
</script>
