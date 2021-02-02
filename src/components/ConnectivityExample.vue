<template>
  <offline @detected-condition="handleConnectivityChange">
    <div slot="online">
      <p>Du är Online</p>
    </div>
    <div slot="offline">
      <p>Du är offline</p>
    </div>
  </offline>
</template>

<script>
import offline from 'v-offline'
export default {
  name: 'ConnectivityExample',
  components: {
    offline,
  },
  methods: {
    handleConnecitivityChange(status) {
      console.log(status)
    },
  },
}
</script>

<style lang="scss" scoped></style>
