<template>
  <b-container>
    <b-row>
      <b-col sm="4">
        <PolisTable />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PolisTable from '@/components/PolisTable.vue'

export default {
  name: 'Polisen',
  components: { PolisTable },
}
</script>

<style></style>
