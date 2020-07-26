<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NavBar',

  computed: mapState({ win: 'window', web: 'webview' }),

  data: () => ({ url: '' }),

  watch: {
    'web.currentURL' (value) { this.url = value }
  },

  methods: mapActions(['setCurrentURL']),

  beforeMount () {
    this.url = this.web.currentURL
  }
}
</script>

<template>
  <v-expand-transition>
    <v-app-bar v-if="win.displayNavBar" class="px-1 transition-fast-in-fast-out" dense flat>
      <v-btn small icon @click="$emit('go-back')">
        <v-icon small>fa-chevron-left</v-icon>
      </v-btn>
      <v-btn small icon @click="$emit('reload')">
        <v-icon small>fa-sync-alt</v-icon>
      </v-btn>
      <v-btn small icon @click="$emit('go-forward')">
        <v-icon small>fa-chevron-right</v-icon>
      </v-btn>
      <v-text-field
        v-model.trim="url"
        class="mx-2"
        hide-details
        dense
        solo
        flat
        @keydown.enter="setCurrentURL(url)"
        />
      <v-btn v-for="(v, i) in web.links" :key="i" small icon @click="setCurrentURL(v.url)">
        <v-icon small>{{ v.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
  </v-expand-transition>
</template>

<style lang="scss" scoped>

.px-1 { z-index: 5; }

</style>
