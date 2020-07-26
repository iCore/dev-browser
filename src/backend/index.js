import { ipcMain } from 'electron'

export default {
  init (win) {
    ipcMain.on('window', (event, state) => {
      if (state === 'minimize') win.minimize()
      if (state === 'close') win.close()
    })
  }
}
