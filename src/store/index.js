import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    politiker: ['Thomas', 'Elizabeth', 'Göran person'],
    comments: [],
  },
  actions: {},
  mutations: {
    addNameToList(state, payLoad) {
      let persons = payLoad
      persons.forEach((person) => state.politiker.push(person))
    },
    addcomment(state, comment) {
      state.comments.push(comment)
    },
  },
})
