<script>
import SystemBar from '@/components/system-bar.vue'

export default {
  name: 'App',

  components: { SystemBar }
}
</script>

<template>
  <v-app>
    <system-bar />
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
