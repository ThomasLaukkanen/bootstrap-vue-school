<template>
  <vue-online-offline @online="isOnline" @offline="isOffline">
    <div slot="online" class="text-success">
      Du är online {{ this.$route.params.userName }}
      <b-icon icon="dot" font-scale="4" shift-v="-4.5" shift-h="-4"></b-icon>
    </div>
    <div slot="offline" class="text-danger">
      Du är offline
      <b-icon icon="dot" font-scale="4" shift-v="-4.5" shift-h="-4"></b-icon>
    </div>
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
      isOffline() {
        console.log('Du är offline')
      }
    }
  }
</script>

<style lang="scss" scoped></style>
