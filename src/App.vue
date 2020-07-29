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
  overflow-y: hidden;
  user-select: none;
}

body {
  border: 1px solid #000000de;
}

main .v-main__wrap {
  height: calc(100vh - 24px);
  width: 100vw;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 4px
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #444;
  background-clip: content-box !important;

  &:hover {
    background-color: #fff;
  }
}

</style>
