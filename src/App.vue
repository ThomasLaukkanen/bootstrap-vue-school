<template>
  <div id="app">
    <div id="wrapper">
      <Navbar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  position: relative;
  min-height: 100vh;
}

footer {
  position: absolute;
  bottom: 0;
}
#wrapper {
  padding-bottom: 64px;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
