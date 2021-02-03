<template>
  <footer class="bg-primary text-light">
    <!-- <ConnectivityExample></ConnectivityExample> -->
    <Onlinechecker></Onlinechecker>
    <ul class="text-light">
      <li>
        <a href="#" class="text-light">
          Om Göteborgarna.se
        </a>
      </li>
      <li>
        <a href="#" class="text-light">
          Cookies
        </a>
      </li>
      <li>
        <a href="#" class="text-light">
          Bidra
        </a>
      </li>
    </ul>
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
  height: 64px;
  width: 100vw;
}
ul {
  display: flex;
  justify-content: space-between;
  width: 50%;
  list-style-type: none;
}
</style>
