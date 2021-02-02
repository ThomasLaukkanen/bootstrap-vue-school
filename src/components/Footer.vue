<template>
  <footer class="bg-primary text-light">
    {{ status }}
    <ConnectivityExample></ConnectivityExample>
  </footer>
</template>

<script>
import ConnectivityExample from './ConnectivityExample.vue'
export default {
  name: 'Footer',
  data() {
    return {
      status: 'default',
    }
  },
  /*created() {
    getOnlineStatus().then((isOnline) => {
      isOnline
        ? (this.status = 'Du är Online')
        : (this.status = ' Du är Offline')
    })

    function getOnlineStatus() {
      if (navigator.onLine) {
        return fetch(location.origin, { method: 'HEAD' })
          .then(() => true)
          .catch(() => false)
      }

      return new Promise((resolve) => resolve(false))
    }
  } ,*/
  computed: {},
  watch: {},
  methods: {
    checkConnection() {
      getOnlineStatus().then((isOnline) => {
        isOnline
          ? (this.status = 'Du är Online')
          : (this.status = ' Du är Offline')
      })

      function getOnlineStatus() {
        if (navigator.onLine) {
          return fetch(location.origin, { method: 'HEAD' })
            .then(() => true)
            .catch(() => false)
        }

        return new Promise((resolve) => resolve(false))
      }
    },
  },
  components: { ConnectivityExample },
}
</script>

<style lang="scss" scoped>
footer {
  height: 64px;
  width: 100vw;
}
</style>
