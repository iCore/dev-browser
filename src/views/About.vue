<script>

export default {
  name: 'About',

  computed: {
    app () { return window.app },
    os () { return window.app.system },
    cpu () { return window.app.system.cpus()[0] || false },
    userInfo () { return window.app.system.userInfo() },
    network () {
      try {
        return Object.values(window.app.system.networkInterfaces())[1][0]
      } catch (e) {
        return false
      }
    }
  }

  // data: () => ({
  //   memoryInUse: 0,
  //   timer: null
  // }),

  // mounted () {
  //   this.timer = window.setInterval(() => {
  //     this.memoryInUse = window.app.system.freemem()
  //   }, 1000)
  // },

  // beforeDestroy () {
  //   window.clearInterval(this.timer)
  // }
}
</script>

<template>
  <v-container id="about" class="fill-height">
    <v-card class="mb-3 shrink">
      <v-card-title class="justify-center">
        <span class="mx-2"><v-icon>fa-laptop-code</v-icon></span>
        <span class="mx-2 text-h4">{{ app.title }}</span>
        <span class="ma-2 text-subtitle-2">{{ app.copyright }} v{{ app.version }}</span>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-row>
          <v-col class="shrink"><strong>CPU:</strong></v-col>
          <v-col>{{ cpu.model }}</v-col>
        </v-row>
        <v-row>
          <v-col class="shrink"><strong>Memória:</strong></v-col>
          <v-col>{{ app.prettyBytes(os.totalmem()) }}</v-col>
        </v-row>
        <!-- <v-row>
          <v-col><v-progress-linear /></v-col>
        </v-row> -->
        <v-row>
          <v-col class="shrink"><strong>Plataforma:</strong></v-col>
          <v-col>{{ os.type() }} - {{ os.release() }}</v-col>
        </v-row>
        <v-divider class="my-2" />
        <v-row>
          <v-col><strong>Network:</strong></v-col>
        </v-row>
        <v-row class="mx-5">
          <v-col class="shrink"><strong>IP:</strong></v-col>
          <v-col>{{ network.address }}</v-col>
        </v-row>
        <v-row class="mx-5">
          <v-col class="shrink"><strong>Mascara:</strong></v-col>
          <v-col>{{ network.netmask }}</v-col>
        </v-row>
        <v-row class="mx-5">
          <v-col class="shrink"><strong>MAC:</strong></v-col>
          <v-col>{{ network.mac }}</v-col>
        </v-row>
        <v-row>
          <v-col class="shrink"></v-col>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col class="shrink"></v-col>
          <v-col></v-col>
        </v-row>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn to="/home" text>Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>

#about {
  display: grid;
  align-items: center;
  justify-content: center;

  .col {
    padding: 2px 10px;

    strong {
      display: block;
      width: 80px;
    }
  }
}

</style>
