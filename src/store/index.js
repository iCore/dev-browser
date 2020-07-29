import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    window: {
      displayNavBar: false,
      alwaysOnTop: false
    },

    webview: {
      currentURL: 'https://google.com',
      links: [
        { url: 'https://localhost:3000', icon: 'fa-home' },
        { url: 'https://google.com', icon: 'fa-globe' }
      ]
    }
  },

  mutations: {
    SET_WINDOW_STATE: (state, value) => Object.assign(state.window, { ...value }),
    SET_WEBVIEW_STATE: (state, value) => Object.assign(state.webview, { ...value })
  },

  actions: {
    toggleDisplayNavBar: ({ commit, state }) =>
      commit('SET_WINDOW_STATE', { displayNavBar: !state.window.displayNavBar }),

    setCurrentURL: ({ commit }, value) =>
      commit('SET_WEBVIEW_STATE', { currentURL: value }),

    toggleAlwaysOnTop: ({ commit }, value) =>
      commit('SET_WINDOW_STATE', { alwaysOnTop: value })
  },

  modules: {}
})
