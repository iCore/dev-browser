<script>
import SystemBar from '@/components/system-bar.vue'
import NavBar from '@/components/nav-bar.vue'

export default {
  name: 'App',

  components: { SystemBar, NavBar }
}
</script>

<template>
  <v-app>
    <system-bar />
    <v-divider></v-divider>
    <nav-bar />
    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
html {
  overflow-y: hidden !important;
  user-select: none;
}
</style>
