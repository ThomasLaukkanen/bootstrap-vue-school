import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResult: ['ett jobb resultat'],
    policeData: [],
  },
  mutations: {},
  actions: {},
  modules: {},
  mounted: {
    getPoliceData() {
      axios
        .get('https://polisen.se/api/events?locationname=G%C3%B6teborg')
        .then(function(response) {
          console.log(response)
          this.state.policeData = response
        })
        .catch(function(error) {
          console.log('det blev ett fel' + error)
        })
        .then(function() {
          //allways executed
        })
    },
  },
})
