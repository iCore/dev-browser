import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    window: {
      displayNavBar: false
    }
  },

  mutations: {
    SET_WINDOW_STATE: (state, value) => Object.assign(state.window, { ...value })
  },

  actions: {
    toggleDisplayNavBar: ({ commit, state }) =>
      commit('SET_WINDOW_STATE', { displayNavBar: !state.window.displayNavBar })
  },

  modules: {}
})
