<script>
export default {
  name: 'NavBar'
}
</script>

<template>
  <v-expand-transition>
    <v-app-bar class="px-1 transition-fast-in-fast-out" app dense flat>
      <v-btn small icon>
        <v-icon small>fa-chevron-left</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon small>fa-sync-alt</v-icon>
      </v-btn>
      <v-btn small icon>
        <v-icon small>fa-chevron-right</v-icon>
      </v-btn>
      <v-text-field class="mx-2" hide-details dense solo flat clearable />
      <v-btn small icon>
        <v-icon small>fa-home</v-icon>
      </v-btn>
    </v-app-bar>
  </v-expand-transition>
</template>
