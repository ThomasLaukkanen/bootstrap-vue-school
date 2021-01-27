import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    politiker: ['Thomas', 'Elizabeth'],
    comments: ['Bästa politikern i stan'],
  },
  actions: {},
  mutations: {
    addNameToList(state, payLoad) {
      state.politiker.push(payLoad)
    },
    addComment(state, comment) {
      state.politiker.push(comment)
    },
  },
})
