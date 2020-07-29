<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NavBar',

  props: {
    state: {
      type: Object,
      required: false,
      default: () => ({ canGoBack: false, canGoForward: false })
    }
  },

  computed: {
    ...mapState({ win: 'window', web: 'webview' }),

    url: {
      get () { return this.web.currentURL },
      set (value) { this.setCurrentURL(value) }
    }
  },

  methods: {
    ...mapActions(['setCurrentURL']),

    emitEvent (name, value) {
      this.$emit(name, value)

      value && this.setCurrentURL(value)
    }
  },

  beforeMount () {
    this.url = this.web.currentURL
  }
}
</script>

<template>
  <v-expand-transition>
    <v-app-bar v-if="win.displayNavBar" class="px-1 transition-fast-in-fast-out" dense flat>
      <v-btn small icon :disabled="!state.canGoBack" @click="emitEvent('go-back')">
        <v-icon small>fa-chevron-left</v-icon>
      </v-btn>
      <v-btn small icon @click="emitEvent('reload')">
        <v-icon small>fa-sync-alt</v-icon>
      </v-btn>
      <v-btn small icon :disabled="!state.canGoForward" @click="emitEvent('go-forward')">
        <v-icon small>fa-chevron-right</v-icon>
      </v-btn>
      <v-text-field
        v-model.trim="url"
        class="mx-2"
        hide-details
        dense
        solo
        flat
        @keydown.enter="emitEvent('go-to', url)"
        />
      <v-btn icon small @click="$emit('dev-tools')">
        <v-icon x-small>fa-code</v-icon>
      </v-btn>
      <v-divider class="mx-2" vertical />
      <v-btn v-for="(v, i) in web.links" :key="i" small icon @click="emitEvent('go-to', v.url)">
        <v-icon small>{{ v.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
  </v-expand-transition>
</template>

<style lang="scss" scoped>

.px-1 { z-index: 5; }

</style>
