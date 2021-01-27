<template>
  <div class="home">
    <HelloWorld msg="Gör Göteborg till en bättre stad!" />
    <SearchField />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SearchField from '@/components/SearchField.vue'

export default {
  name: 'Hem',
  components: {
    HelloWorld,
    SearchField,
  },
}
</script>
