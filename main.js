const electron = require('electron')
const { app, BrowserWindow } = electron;

let win


function createWindow() {
    win = new BrowserWindow()

    win.loadFile('index.html')
}

app.on('ready', createWindow)

