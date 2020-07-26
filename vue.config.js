module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    electronBuilder: {
      outputDir: 'dist/electron',
      appId: 'com.icore.dev-browser',
      copyright: 'Copyright © 2020 by Jocian de Souza Mendonça',
      asar: true,

      preload: 'src/preload.js',

      builderOptions: {
        publish: [
          { provider: 'github', token: process.env.GH_TOKEN }
        ]
      }
    }
  }
}
