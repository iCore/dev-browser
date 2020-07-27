import { ipcMain } from 'electron'
import { autoUpdater } from 'electron-updater'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default {
  init (win) {
    // autoUpdater.setFeedURL(isDevelopment
    //   ? '/home/administrador/Projects/dev-browser/dist/electron/'
    //   : 'https://github.com/iCore/dev-browser/release')

    // autoUpdater.requestHeaders = { 'PRIVATE-TOKEN': process.env.GH_TOKEN }

    // autoUpdater.autoDownload = false

    ipcMain.on('window', (event, state) => {
      if (state === 'minimize') win.minimize()
      if (state === 'close') win.close()
    })

    ipcMain.on('display-home', () => {
      win.setResizable(true)
      win.setSize(600, 400)
      win.center()
    })

    ipcMain.on('check-for-updates', e => {
      if (isDevelopment) return e.reply('app-relase')

      try {
        autoUpdater.checkForUpdates()

        // autoUpdater.on('update-available', () => e.reply('update-available', true))
        autoUpdater.on('update-not-available', () => e.reply('app-relase'))
        autoUpdater.on('download-progress', status => e.reply('download-progress', status))
        // autoUpdater.on('update-downloaded', () => autoUpdater.quitAndInstall(true, true))
      } catch (e) { console.log(e) }
    })
  }
}
