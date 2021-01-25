<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style lang="scss"></style>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>
