<script>
export default {
  name: 'CheckForUpdates',

  mounted () {
    window.app.checkForUpdates()
      .then(console.log)
  }
}
</script>

<template>
  <v-container id="check-for-updates">teste</v-container>
</template>

<style lang="scss" scoped>

#check-for-updates {
  -webkit-app-region: drag;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

</style>
