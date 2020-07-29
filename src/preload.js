import os from 'os'
import path from 'path'

import { ipcRenderer } from 'electron'
import prettyBytes from 'pretty-bytes'
import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

import { displayName, version, author, copyright } from '../package.json'

const isDev = process.env.NODE_ENV === 'development'
const dataPath = path.resolve(isDev ? 'dist' : '')

window.app = {
  title: displayName,

  version,
  author,
  copyright,

  prettyBytes,

  system: os,

  database: new JsonDB(new Config(`${dataPath}/icore-config`, true, isDev, '/')),

  checkForUpdates (callback) {
    return new Promise((resolve, reject) => {
      try {
        ipcRenderer.send('check-for-updates')
        ipcRenderer.on('download-progress', (_, status) => callback(status))
        ipcRenderer.on('app-relase', () => resolve())
        ipcRenderer.on('update-error', (_, err) => reject(err))
      } catch (e) {
        reject(e)
      }
    })
  },

  displayHome () { ipcRenderer.send('display-home') },

  setAlwaysOnTop (value) { ipcRenderer.send('always-on-top', value) },

  minimize () { ipcRenderer.send('window', 'minimize') },

  close () { ipcRenderer.send('window', 'close') }
}
