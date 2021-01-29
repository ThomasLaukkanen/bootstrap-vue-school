import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

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
})
