<script>
export default {
  name: 'SystemBar'
}
</script>

<template>
  <v-system-bar id="system-bar" app>
    <span>Dev Browser</span>
    <v-spacer />
    <v-btn icon x-small>
      <v-icon x-small>fa-info</v-icon>
    </v-btn>
    <v-divider class="mx-2" inset vertical />
    <v-btn icon x-small>
      <v-icon x-small>fa-chevron-down</v-icon>
    </v-btn>
    <v-btn icon x-small>
      <v-icon x-small>fa-table</v-icon>
    </v-btn>
    <v-btn icon x-small>
      <v-icon x-small>fa-cog</v-icon>
    </v-btn>
    <v-divider class="mx-2" inset vertical />
    <v-btn icon x-small>
      <v-icon x-small>fa-minus</v-icon>
    </v-btn>
    <v-btn icon x-small>
      <v-icon x-small>fa-times</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<style lang="scss" scoped>

#system-bar {
  -webkit-app-region: drag;

  button {
    -webkit-app-region: no-drag;

    i { margin-right: 0 !important; }
  }
}

</style>
