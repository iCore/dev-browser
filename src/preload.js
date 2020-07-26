import { ipcRenderer } from 'electron'

window.minimize = () => ipcRenderer.send('window', 'minimize')
window.minimize = () => ipcRenderer.send('window', 'close')
