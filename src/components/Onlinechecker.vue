<template>
  <vue-online-offline @online="isOnline" @offline="isOffline">
    <div slot="online">Du är online</div>
    <div slot="offline">Im offline</div>
  </vue-online-offline>
</template>

<script>
import VueOnlineOffline from 'vue-online-offline'
export default {
  components: { VueOnlineOffline },
  methods: {
    isOnline() {
      console.log('Du är online')
    },
  },
  isOffline() {
    console.log('Du är offline')
  },
}
</script>

<style lang="scss" scoped></style>
