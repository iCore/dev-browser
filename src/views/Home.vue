<script>
import NavBar from '@/components/nav-bar.vue'

export default {
  name: 'Home',
  components: { NavBar }
}
</script>

<template>
  <div>
    <nav-bar />
    <webview ref="web" id="webview" src="https://google.com"></webview>
  </div>
</template>

<style lang="scss" scoped>
#webview {
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
