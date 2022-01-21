const { app, BrowserWindow,session } = require('electron');
const path = require('path');

const os = require('os')

// installing react dev tools
// const reactDevToolsPath = path.join(
//   os.homedir(),
//   '/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.22.0_0'
// )

// console.log(reactDevToolsPath);
// app.whenReady().then(async () => {
//   await session.defaultSession.loadExtension(reactDevToolsPath)
// })

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 900,
    webPreferences:{
      preload : MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,//path.join(__dirname,'preload.js')
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  console.log("created");

  // Open the DevTools.
  if (process.env.NODE_ENV === "development") {
        mainWindow.webContents.on("did-frame-finish-load", () => {
          mainWindow.webContents.once("devtools-opened", () => {
            mainWindow.focus();
          });
          mainWindow.webContents.openDevTools();
        });
      }
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
