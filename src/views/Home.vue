<script>
import { mapState, mapActions } from 'vuex'

import NavBar from '@/components/nav-bar.vue'

export default {
  name: 'Home',

  components: { NavBar },

  computed: mapState({ web: 'webview' }),

  data: () => ({
    state: {
      canGoBack: false,
      canGoForward: false,
      loading: false
    },

    url: ''
  }),

  methods: {
    ...mapActions(['setCurrentURL']),

    goBack () { this.$refs.web.goBack() },

    goForward () { this.$refs.web.goForward() },

    goTo (url) { this.$refs.web.loadURL(url) },

    reload () { this.$refs.web.reloadIgnoringCache() },

    toggleDevTools () {
      if (this.$refs.web.isDevToolsOpened()) {
        this.$refs.web.closeDevTools()
      } else {
        this.$refs.web.openDevTools()
      }
    },

    setState () {
      this.state.canGoBack = this.$refs.web.canGoBack()
      this.state.canGoForward = this.$refs.web.canGoForward()
    }
  },

  mounted () {
    this.url = this.web.currentURL

    this.$refs.web.addEventListener('did-start-loading', () => (this.state.loading = true))
    this.$refs.web.addEventListener('did-finish-load', () => (this.state.loading = false))
    this.$refs.web.addEventListener('did-navigate', ({ url }) => {
      if (url) {
        this.setCurrentURL(url)
        this.setState()
      }
    })
  }
}
</script>

<template>
  <div id="home">
    <nav-bar
      :state="state"
      @go-back="goBack"
      @go-forward="goForward"
      @go-to="goTo"
      @reload="reload"
      @dev-tools="toggleDevTools"
      />
    <v-progress-linear v-if="state.loading" indeterminate absolute />
    <webview ref="web" id="webview" :src="url"></webview>
  </div>
</template>

<style lang="scss" scoped>
#webview {
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
