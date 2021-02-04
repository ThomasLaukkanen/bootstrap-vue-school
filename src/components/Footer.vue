<template>
  <footer class="bg-primary text-light">
    <Onlinechecker align="center"></Onlinechecker>
    <b-nav align="center" class="mb-2">
      <b-nav-item link-classes="text-light">Om Göteborgarna.se</b-nav-item>
      <b-nav-item link-classes="text-light">Cookies</b-nav-item>
      <b-nav-item link-classes="text-light">Idelådan</b-nav-item>
      <b-nav-item link-classes="text-light">Utvecklare</b-nav-item>
      <b-nav-item link-classes="text-light">Open Source</b-nav-item>
    </b-nav>
  </footer>
</template>

<script>
// import ConnectivityExample from './ConnectivityExample.vue'
import Onlinechecker from './Onlinechecker.vue'
export default {
  name: 'Footer',
  computed: {},
  watch: {},
  components: { Onlinechecker },
}
</script>

<style lang="scss" scoped>
footer {
  min-height: 64px;
  width: 100vw;
}
</style>
