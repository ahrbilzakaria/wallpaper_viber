// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';


// Expose protected methods that allow the renderer process to use
// the APIs exposed by the preload script in the main process.
contextBridge.exposeInMainWorld("electron", {
    ipcRenderer: {
        title:'title',
      version: 'version',
  },
getVersion: () => ipcRenderer.sendSync("app/version"),
maximize: () => ipcRenderer.send("app/maximize"),
  minimize: () => ipcRenderer.send("app/minimize"),
  onToggleTitlebar: (callback: (show: boolean) => void) =>
    ipcRenderer.on("toggle-titlebar", (_event, show) => callback(show)),
  close: () => ipcRenderer.send("app/close"),
});