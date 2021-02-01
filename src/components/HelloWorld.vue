<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-row>
      <b-col>
        <b-img
          src="https://goteborg.se/wps/wcm/connect/d57b2821-fb67-40ba-91e7-45034614a597/gbg_st_rgb_sociala+medier_high.png?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-d57b2821-fb67-40ba-91e7-45034614a597-nrSaC9-"
          alt="Göteborg"
          fluid
          center
        />
      </b-col>
      <b-col>
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
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-align: center;
  margin: 32px auto;
}
img {
  width: 50%;
}
</style>
