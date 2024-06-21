const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
  sendMessage: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  onMessage: (channel, callback) => {
    ipcRenderer.on(channel, (event, data) => {
      callback(data);
    });
  }
});


contextBridge.exposeInMainWorld('process', {
  env: {
    MY_CUSTOM_ENV: 'development', // 또는 다른 환경 설정
  },
});