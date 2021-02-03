<template>
  <b-container>
    <Intro msg="Hjälp till att skapa drömstaden Göteborg!" />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'

export default {
  name: 'Hem',
  components: {
    Intro,
  },
}
</script>

<style lang="scss" scoped></style>
