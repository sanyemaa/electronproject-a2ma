const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;


function createWindow() {
    win = new BrowserWindow();

    win.loadFile('index.html');
}

app.on('ready', createWindow);

