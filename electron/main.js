const { app, ipcMain, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1230,
    height: 780,
    minWidth: 600,
    minHeight: 730,
    center: true,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false,
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["self"],
          scriptSrc: ["self", "unsafe-inline", "unsafe-eval"], // 'unsafe-eval' 추가
          styleSrc: ["self", "unsafe-inline"],
          fontSrc: ["self"],
          imgSrc: ["self", "data:"],
          connectSrc: ["self"],
          frameSrc: ["self"],
        }
      }
    },
    autoHideMenuBar: true,
    frame: false,
    titleBarStyle: 'hiddenInset'
    
  });

  mainWindow.loadFile(path.join(__dirname, './dist/index.html'));
  mainWindow.webContents.openDevTools();

  // Add IPC listeners
  ipcMain.on('message', (event, data) => {
    console.log(data); // 'Hello from React Native Web!'
    event.reply('reply', true);
  });

  //electron 창 조절
  ipcMain.on("close", (_event, data) => {
    mainWindow.close();
  });

  ipcMain.on("maximize", (_event, data) => {
    // listen for maximize event
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on("unmaximize", (_event, data) => {
    // listen for maximize event
    mainWindow.unmaximize();
  });

  ipcMain.on("minimize", (_event, data) => {
    // listen for minimize event
    mainWindow.minimize();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
