import { ipcRenderer } from 'electron'
// import { autoUpdater } from 'electron-updater'

import { displayName } from '../package.json'

window.app = {
  title: displayName,

  checkForUpdates () {
    return new Promise((resolve, reject) => {
      try {
        ipcRenderer.send('check-for-updates')
        ipcRenderer.on('update-available', resolve)
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
