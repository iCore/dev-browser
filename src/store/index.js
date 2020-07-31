import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const { app, database } = global.__core__

export default new Vuex.Store({
  state: {
    app,

    window: {
      displayNavBar: false,
      alwaysOnTop: false
    },

    webview: {
      currentURL: '',
      links: [
        { url: 'http://localhost:3000', icon: 'fa-home', default: false },
        { url: 'https://www.google.com', icon: 'fa-globe', default: true }
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

    toggleAlwaysOnTop ({ commit }, value) {
      commit('SET_WINDOW_STATE', { alwaysOnTop: value })

      global.__core__.window.setAlwaysOnTop(value)
    },

    loadState ({ commit, state }) {
      const win = database.load('/window')

      commit('SET_WINDOW_STATE', win)
      commit('SET_WEBVIEW_STATE', database.load('/webview'))

      global.__core__.window.setAlwaysOnTop(win.alwaysOnTop || state.window.alwaysOnTop)
    },

    saveState ({ commit, state }) {
      database.save({
        window: {
          alwaysOnTop: state.window.alwaysOnTop
        },

        webview: state.webview
      })
    }
  },

  modules: {}
})
