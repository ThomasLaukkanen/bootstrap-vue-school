import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    politiker: ['Thomas', 'Elizabeth', 'Göran person'],
    comments: [],
  },
  actions: {},
  mutations: {
    addNameToList(state, payLoad) {
      state.politiker.push(payLoad)
    },
    addcomment(state, comment) {
      state.comments.push(comment)
    },
  },
  created() {
    axios
      .get(
        'https://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=G%C3%B6teborgs+kommun&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista='
      )
      .then((response) => (this.state.politiker = response.person))
  },
})
