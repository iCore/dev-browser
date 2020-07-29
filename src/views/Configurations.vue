<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Configurations',

  computed: {
    ...mapState({ win: 'window', web: 'webview' }),

    alwaysOnTop: {
      get () { return this.win.alwaysOnTop },
      set (value) { this.toggleAlwaysOnTop(value) }
    }
  },

  watch: {
    'win.alwaysOnTop': (value) => {
      window.app.setAlwaysOnTop(value)
    }
  },

  methods: mapActions(['toggleAlwaysOnTop', 'saveState']),

  beforeDestroy () {
    this.saveState()
  }
}
</script>

<template>
  <v-container id="configurations" class="fill-height">
    <v-card class="mb-3 shrink">
      <v-card-title class="justify-center">
        <span class="mx-2"><v-icon>fa-cog</v-icon></span>
        <span class="mx-2 text-h5">Configurações</span>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-switch
          v-model="alwaysOnTop"
          class="ma-0"
          label="Sempre na frente"
          hide-details
          />
          <v-divider class="mt-4" />
          <div v-for="(v, i) in web.links" :key="i" >
            <v-text-field
              v-model.trim="v.url"
              :prepend-icon="v.icon"
              hide-details
              />
          </div>
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

#configurations {
  display: grid;
  align-items: center;
  justify-content: center;

  // strong {
  //   white-space: nowrap;
  // }

  .shrink {
    min-width: 350px;

    .v-input__icon .v-icon {
      font-size: 13px;
    }
  }
}

</style>
