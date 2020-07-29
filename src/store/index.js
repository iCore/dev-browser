import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const { database } = window.app

export default new Vuex.Store({
  state: {
    window: {
      displayNavBar: false,
      alwaysOnTop: false
    },

    webview: {
      currentURL: '',
      links: [
        { url: 'https://localhost:3000', icon: 'fa-home', default: false },
        { url: 'https://google.com', icon: 'fa-globe', default: true }
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
      commit('SET_WINDOW_STATE', { alwaysOnTop: value }),

    loadState ({ commit, state }) {
      const data = database.getData('/')

      if (!data.window) data.window = {}
      if (!data.webview) data.webview = { currentURL: '' }

      state.webview.links.forEach(e => {
        if (e.default && data.webview.currentURL === '') data.webview.currentURL = e.url
      })

      commit('SET_WINDOW_STATE', data.window)
      commit('SET_WEBVIEW_STATE', data.webview)
    },

    saveState ({ commit, state }) {
      database.push('/', {
        window: {
          alwaysOnTop: state.window.alwaysOnTop
        },

        webview: state.webview
      })
    }
  },

  modules: {}
})
