import { ipcMain } from 'electron'
import { autoUpdater } from 'electron-updater'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default function (win) {
  ipcMain.on('window-minimize', () => win.minimize())
  ipcMain.on('window-close', () => win.close())
  ipcMain.on('always-on-top', (_, value) => win.setAlwaysOnTop(value))

  ipcMain.on('display-home', () => {
    win.setSize(600, 400, true)
    win.center()
  })

  ipcMain.on('check-for-updates', event => {
    if (isDevelopment) return event.reply('app-relase')

    try {
      autoUpdater.checkForUpdates()

      autoUpdater.on('update-not-available', () => event.reply('app-relase'))
      autoUpdater.on('download-progress', status => event.reply('download-progress', status))
      autoUpdater.on('update-downloaded', () => autoUpdater.quitAndInstall(true, true))
      autoUpdater.on('error', e => event.reply('update-error', e))
    } catch (e) { console.log(e.toString()) }
  })
}
