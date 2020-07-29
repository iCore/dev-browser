import os from 'os'

import { ipcRenderer } from 'electron'
import prettyBytes from 'pretty-bytes'

import { displayName, version, author, copyright } from '../package.json'

window.app = {
  title: displayName,

  version,
  author,
  copyright,

  prettyBytes,

  system: os,

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

  setAlwaysOnTop (value) { ipcRenderer.send('always-on-top', value) },

  minimize () { ipcRenderer.send('window', 'minimize') },

  close () { ipcRenderer.send('window', 'close') }
}
