import { ipcRenderer } from 'electron'
import prettyBytes from 'pretty-bytes'

export default {
  checkForUpdates (progress) {
    return new Promise((resolve, reject) => {
      try {
        ipcRenderer.send('check-for-updates')
        ipcRenderer.on('app-relase', () => resolve())
        ipcRenderer.on('update-error', (_, err) => reject(err))

        ipcRenderer.on('download-progress', (_, status) => progress({
          speed: prettyBytes(status.bytesPerSecond || 0),
          total: prettyBytes(status.total || 0),
          transferred: prettyBytes(status.transferred || 0),
          percent: (Math.floor((status.percent || 0) * 100) / 100)
        }))
      } catch (e) {
        reject(e)
      }
    })
  },

  displayHome () { ipcRenderer.send('display-home') },

  setAlwaysOnTop (value) { ipcRenderer.send('always-on-top', value) },

  minimize () { ipcRenderer.send('window-minimize') },

  close () { ipcRenderer.send('window-close') }
}
