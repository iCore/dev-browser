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

    ipcMain.on('window', (_, state) => {
      if (state === 'minimize') win.minimize()
      if (state === 'close') win.close()
    })

    ipcMain.on('always-on-top', (_, value) => {
      win.setAlwaysOnTop(value)
    })

    ipcMain.on('display-home', () => {
      win.setSize(600, 400, true)
      win.center()
    })

    ipcMain.on('check-for-updates', event => {
      if (isDevelopment) return event.reply('app-relase')

      try {
        autoUpdater.checkForUpdates()

        // autoUpdater.on('update-available', () => event.reply('update-available', true))
        autoUpdater.on('update-not-available', () => event.reply('app-relase'))
        autoUpdater.on('download-progress', status => event.reply('download-progress', status))
        autoUpdater.on('update-downloaded', () => autoUpdater.quitAndInstall(true, true))
      } catch (e) { console.log(e) }
    })
  }
}
