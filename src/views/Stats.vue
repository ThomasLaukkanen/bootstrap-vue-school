<template>
  <b-container>
    <h1>Statistik om Göteborg</h1>
    <Chart />
  </b-container>
</template>

<script>
import Chart from '../components/Chart.vue'
// import chartData from '../chart.js'

  export default {
    data(){
      return {
        // chartData
      }
    },
    components: { Chart },
  }


</script>

<style lang="scss" scoped></style>
