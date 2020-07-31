<script>
import { mapState } from 'vuex'

export default {
  name: 'CheckForUpdates',

  computed: mapState(['app']),

  data: () => ({
    speed: '0 B',
    total: '0 B',
    transferred: '0 B',
    percent: 0
  }),

  methods: {
    progress (status) {
      this.speed = window.app.prettyBytes(status.bytesPerSecond || 0)
      this.total = window.app.prettyBytes(status.total || 0)
      this.transferred = window.app.prettyBytes(status.transferred || 0)
      this.percent = Math.floor((status.percent || 0) * 100) / 100
    }
  },

  mounted () {
    this.progress.bind(this)

    const { __core__ } = global

    const redirect = e => {
      this.$router.push('/home')

      __core__.window.displayHome()

      e && console.error(e.toString())
    }

    __core__.window
      .checkForUpdates(this.progress)
      .then(redirect)
      .catch(redirect)
  }
}
</script>

<template>
  <v-container id="check-for-updates">
    <div class="logo">
      <v-icon x-large>fa-laptop-code</v-icon>
      <span>{{ app.title }}</span>
    </div>
    <div v-if="percent > 0">
      <span class="status">Baixando: {{ transferred }} de {{ total }} ({{ speed }}/s)</span>
      <v-progress-linear v-model="percent" />
    </div>
  </v-container>
</template>

<style lang="scss" scoped>

#check-for-updates {
  -webkit-app-region: drag;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: grid;
  grid-template-rows: 1fr auto;

  align-items: center;

  .logo {
    text-align: center;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: center;

    span {
      font-size: 40px;
      margin-left: 20px;
    }
  }

  .status {
    font-size: 13px;
    color: #949494;
  }
}

</style>
