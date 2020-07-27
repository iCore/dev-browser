const { copyright, author } = require('./package.json')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    electronBuilder: {
      outputDir: 'dist/electron',
      preload: 'src/preload.js',

      builderOptions: {
        appId: 'com.icore.dev-browser',
        copyright: `${copyright} by ${author.name}`,
        asar: true,

        linux: {
          target: 'AppImage',
          category: 'Network'
        },

        publish: [
          {
            provider: 'github',
            owner: 'iCore',
            repo: 'dev-browser',
            token: process.env.GH_TOKEN
          }
        ]
      }
    }
  }
}

// builderOptions: {
//   afterAllArtifactBuild?,
//   afterPack?,
//   afterSign?,
//   apk?,
//   appId?,
//   appImage?,
//   appx?,
//   appxManifestCreated?,
//   artifactBuildCompleted?,
//   artifactBuildStarted?,
//   artifactName?,
//   asar?,
//   asarUnpack?,
//   beforeBuild?,
//   buildDependenciesFromSource?,
//   buildVersion?,
//   compression?,
//   copyright?,
//   cscKeyPassword?,
//   cscLink?,
//   deb?,
//   detectUpdateChannel?,
//   directories?,
//   dmg?,
//   electronCompile?,
//   electronDist?,
//   electronDownload?,
//   electronUpdaterCompatibility?,
//   electronVersion?,
//   extends?,
//   extraFiles?,
//   extraMetadata?,
//   extraResources?,
//   fileAssociations?,
//   files?,
//   forceCodeSigning?,
//   framework?,
//   freebsd?,
//   generateUpdatesFilesForAllChannels?,
//   icon?,
//   includePdb?,
//   launchUiVersion?,
//   linux?,
//   mac?,
//   mas?,
//   masDev?,
//   msi?,
//   nodeGypRebuild?,
//   nodeVersion?,
//   npmArgs?,
//   npmRebuild?,
//   nsis?,
//   nsisWeb?,
//   onNodeModuleFile?,
//   p5p?,
//   pacman?,
//   pkg?,
//   portable?,
//   productName?,
//   protocols?,
//   publish?,
//   releaseInfo?,
//   remoteBuild?,
//   removePackageScripts?,
//   rpm?,
//   snap?,
//   squirrelWindows?,
//   target?,
//   win?,
//   $schema?
// }
