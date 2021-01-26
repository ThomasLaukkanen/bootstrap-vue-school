<template>
  <div class="home">
    <HelloWorld msg="Gör göteborg en bättre stad!" />
    <SearchField />
    <JobResultTable />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SearchField from '@/components/SearchField.vue'
import JobResultTable from '@/components/JobResultTable'

export default {
  name: 'Hem',
  components: {
    HelloWorld,
    SearchField,
    JobResultTable,
  },
}
</script>
