<template>
  <div>
    <h1>{{ msg }}</h1>
    <b-row>
      <b-col sm="12" md="6">
        <b-img
          :src="require('../assets/goteborg.png')"
          alt="Göteborgs logo"
          fluid
          center
        />
      </b-col>
      <b-col md="6">
        <p class="shadow p-3 mb-5 bg-white rounded">
          Göteborgarna är Sveriges största open source projekt som är helt
          transparant, och där alla invånare kan vara med och skapa en bättre
          stad. Tillsammans kan vi bygga något helt unikt som hela staden kan ta
          nytta av. Om du är en utvecklare kan du vara med och bygga upp
          Göteborgarna, all kod är open source och finns tillgänglig på Github.
          Om du inte är en utvecklare kan du ändå bidra med ideér eller
          förbättringar till websidan. Det enda kravet är att du ska vara bosatt
          i Göteborgs-kommun. Välkommen till Göteborgarna!
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Intro',
    props: {
      msg: String
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    text-align: center;
    margin: 32px auto;
  }
  img {
    width: 50%;
  }
</style>
