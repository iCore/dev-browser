import { ipcRenderer } from 'electron'
import prettyBytes from 'pretty-bytes'

import { displayName } from '../package.json'

window.app = {
  title: displayName,

  prettyBytes,

  displayHome () { ipcRenderer.send('display-home') },

  checkForUpdates (callback) {
    return new Promise((resolve, reject) => {
      try {
        ipcRenderer.send('check-for-updates')
        ipcRenderer.on('download-progress', (_, status) => callback(status))
        ipcRenderer.on('app-relase', resolve)
      } catch (e) {
        reject(e)
      }
    })
  },

  minimize () { ipcRenderer.send('window', 'minimize') },

  close () { ipcRenderer.send('window', 'close') }
}

// autoUpdater.on('checking-for-update', () => {
//   window.app.updates.status = 'Verificando se existe atualizações'
// })

// autoUpdater.on('update-available', info => {
//   window.app.updates.info = info
// })

// autoUpdater.on('update-not-available', () => {
//   window.app.updates.status = 'Já esta na ultima versão'
// })

// autoUpdater.on('download-progress', p => {
//   window.app.updates.progress = p
// })

// autoUpdater.on('update-downloaded', () => {
//   autoUpdater.quitAndInstall()
// })

// autoUpdater.on('error', console.log)
