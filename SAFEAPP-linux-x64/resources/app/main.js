const {app,BrowserWindow} = require('electron');
const {rget} = require('request').get;

app.on('ready',()=>{
  let mainW = new BrowserWindow({
    title:"Safe opener",
    height:400,
    width:400
  });
  mainW.loadURL(`file://${__dirname}/index.html`);
  //mainW.webContents.openDevTools();
});

//app.on('quit', app.quit);
app.on('window-all-closed', ()=>{
  app.quit();
});
