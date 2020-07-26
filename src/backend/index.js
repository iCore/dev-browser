import { ipcMain } from 'electron'
import { autoUpdater } from 'electron-updater'

export default {
  init (win) {
    ipcMain.on('window', (event, state) => {
      if (state === 'minimize') win.minimize()
      if (state === 'close') win.close()
    })

    ipcMain.on('check-for-updates', e => {
      autoUpdater.checkForUpdates()

      autoUpdater.on('update-available', () => e.send('update-available', true))
      autoUpdater.on('update-not-available', () => e.send('update-available', false))
    })
  }
}
