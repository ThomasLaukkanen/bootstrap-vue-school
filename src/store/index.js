import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    politiker: ['Thomas', 'Elizabeth', 'Göran person'],
    comments: ['Bästa politikern i stan', 'Thomas to president'],
  },
  actions: {},
  mutations: {
    addNameToList(state, payLoad) {
      state.politiker.push(payLoad)
    },
    addComment(state, comment) {
      state.comments.push(comment)
    },
  },
})
