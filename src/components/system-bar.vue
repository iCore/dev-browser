<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SystemBar',

  computed: {
    ...mapState({ win: 'window', app: 'app' }),

    isHomePage () { return this.$route.path === '/home' }
  },

  methods: {
    ...mapActions(['toggleDisplayNavBar', 'saveState']),

    minimize () { global.__core__.window.minimize() },

    close () {
      this.saveState()

      global.__core__.window.close()
    }
  }
}
</script>

<template>
  <v-system-bar id="system-bar" app>
    <v-icon small>fa-laptop-code</v-icon>
    <span>{{ app.title }}</span>
    <v-spacer />
    <v-btn icon x-small to="/about">
      <v-icon x-small>fa-info</v-icon>
    </v-btn>
    <v-divider class="mx-2" inset vertical />
    <v-btn v-if="isHomePage" class="mx-1" icon x-small @click="toggleDisplayNavBar">
      <v-icon x-small>{{ win.displayNavBar ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
    </v-btn>
    <!-- <v-btn icon x-small>
      <v-icon x-small>fa-table</v-icon>
    </v-btn> -->
    <v-btn to="/configurations" icon x-small>
      <v-icon x-small>fa-cog</v-icon>
    </v-btn>
    <v-divider class="mx-2" inset vertical />
    <v-btn icon x-small @click="minimize">
      <v-icon x-small>fa-minus</v-icon>
    </v-btn>
    <v-btn icon x-small @click="close">
      <v-icon x-small>fa-times</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<style lang="scss" scoped>

#system-bar {
  -webkit-app-region: drag;

  button, a {
    -webkit-app-region: no-drag;

    i { margin-right: 0 !important; }
  }
}

</style>
