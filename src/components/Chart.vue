<template>
  <div>
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import chartData from '../chart.js'
import Chart from 'chart.js'


  export default {  
     name: 'Chart',
    data(){
      return {
       chartData  
      }
    },
    mounted() {
    const ctx = document.getElementById('chart');
    new Chart(ctx, this.chartData);
  }
  }
</script>

<style lang="scss" scoped>

</style>