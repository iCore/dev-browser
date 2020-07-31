<script>

export default {
  name: 'About',

  computed: {
    system () { return global.__core__.system },

    app () { return global.__core__.app },

    networks () { return global.__core__.system.network }
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
          <v-col cols="12" class="text-center">Desenvolvido por <em>{{ app.author.name }}</em></v-col>
          <v-col cols="12" class="text-center">Contato: <em>{{ app.author.email }}</em></v-col>
        </v-row>
        <v-divider class="my-3" />
        <v-row>
          <v-col class="shrink"><strong>CPU:</strong></v-col>
          <v-col>{{ system.cpu.model }}</v-col>
        </v-row>
        <v-row>
          <v-col class="shrink"><strong>Memória:</strong></v-col>
          <v-col>{{ system.memory.total }}</v-col>
        </v-row>
        <!-- <v-row>
          <v-col><v-progress-linear /></v-col>
        </v-row> -->
        <v-row>
          <v-col class="shrink"><strong>Plataforma:</strong></v-col>
          <v-col>{{ system.os.type }} - {{ system.os.release }}</v-col>
        </v-row>
        <v-divider class="my-2" />
        <v-row>
          <v-col><strong>Networks:</strong></v-col>
        </v-row>
        <v-row v-for="(v1, i1) in networks" :key="i1" class="mx-5">
          <v-col v-for="(v2, i2) in v1" :key="i2">
            <v-row>
              <v-col class="shrink"><strong>{{ v2.family }}:</strong></v-col>
              <v-col>{{ v2.address }}</v-col>
            </v-row>
            <v-row>
              <v-col class="shrink"><strong>Mascara:</strong></v-col>
              <v-col>{{ v2.netmask }}</v-col>
            </v-row>
            <v-row>
              <v-col class="shrink"><strong>MAC:</strong></v-col>
              <v-col>{{ v2.mac }}</v-col>
            </v-row>
          </v-col>
          <v-col cols="12"><v-divider /></v-col>
        </v-row>
        <v-row>
          <v-col class="shrink"><strong>Usuários:</strong></v-col>
          <v-col>{{ system.user.username }}</v-col>
        </v-row>
        <v-row>
          <v-col class="shrink"><strong>Pasta pessoal:</strong></v-col>
          <v-col>{{ system.user.homedir }}</v-col>
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
      width: 100px;
    }
  }
}

</style>
