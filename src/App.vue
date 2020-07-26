<script>
import SystemBar from '@/components/system-bar.vue'

export default {
  name: 'App',

  components: { SystemBar }
}
</script>

<template>
  <v-app>
    <system-bar v-if="$route.path !== '/'" />
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

body {
  border: 1px solid #000000de;
}

</style>
