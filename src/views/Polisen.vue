<template>
  <b-container>
    <b-row>
      <b-col>
        <PolisTable class="mb-5" />
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

<style lang="scss" scoped>
body {
  overflow: hidden;
}
</style>
