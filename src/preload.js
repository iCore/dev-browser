import { ipcRenderer } from 'electron'

window.minimize = () => ipcRenderer.send('window', 'minimize')
window.close = () => ipcRenderer.send('window', 'close')
