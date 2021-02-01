<template>
  <footer class="bg-primary text-light">
    {{ status }}
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      status: '',
    }
  },
  created() {
    getOnlineStatus().then((isOnline) => {
      console.log(
        isOnline
          ? (this.status = 'Du är Online')
          : (this.status = ' Du är Offline')
      )
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
  computed: {},
  watch: {},
}
</script>

<style lang="scss" scoped>
footer {
  height: 64px;
  width: 100vw;
}
</style>
