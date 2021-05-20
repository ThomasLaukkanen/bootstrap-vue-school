<template>
  <b-container>
    <h1>Statistik om Göteborg</h1>
    <h2 class="mt-5">Verksamhetens kostnader nämnder</h2>

    <Chart />

    <a
      href="https://www4.goteborg.se/prod/Intraservice/Namndhandlingar/SamrumPortal.nsf/ABE7096B4B0C628CC125860F002DC149/$File/2.1.1_Forslag_till_budget_MLCKD_till_hemsidanKF.pdf?OpenElement"
      >Budget 2021</a
    >
    <br />
    <a
      href="https://goteborg.se/wps/portal/start/kommun-o-politik/handlingar-och-protokoll/namndhandlingar/valj-namnd-ar?showmote=Kommunfullm%C3%A4ktige2020-11-05&meetingTitle=Sammantr%C3%A4de%20Kommunfullm%C3%A4ktige%202020-11-05&uri=gbglnk%3Agbg.page.4c4bfea5-c2ca-4b87-9bce-dcb647c7a106&organisation=Kommunfullm%C3%A4ktige"
      >Förslag till budget från övriga partier</a
    >
    <br />
    <a
      class="m-5"
      href="https://goteborg.se/wps/portal/start/kommun-o-politik/kommunfakta/ekonomi/budget?uri=gbglnk%3Agbg.page.f5024a79-3755-4ba0-896d-6c2288d43acf"
      >Göteborgs Stads budget(Alla år)</a
    >
  </b-container>
</template>

<script>
  import Chart from '../components/Chart.vue'
  // import chartData from '../chart.js'

  export default {
    data() {
      return {
        // chartData
      }
    },
    components: { Chart }
  }
</script>

<style lang="scss" scoped></style>
