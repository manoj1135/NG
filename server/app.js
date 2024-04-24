console.log("initializing application....");
const path = require('path');
const rootDir = __dirname;
const webDir = path.join('web','browser');
const confDir = path.join(rootDir,'conf');
const dbDir = path.join(confDir,'db');
const nodeDir = path.join(rootDir,"node_modules");
const express = require('express');
const bodyParser = require('body-parser');
const boot = require(path.join(confDir,"BootStrap"));
const AppConf = require(path.join(confDir,"AppConf"));
const app = express();
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(webDir));
app.use(cookieParser());

console.log("rootDir "+rootDir);


var serverConfig =boot.SYSCONFIG.path().server;

boot.database.sequelize.sync({force:AppConf.isReloadDB})
  .then(app.listen(serverConfig.default.port, ()=>{
    console.log("Server is started on port "+serverConfig.default.port);
  }))
  .catch(function(err) {
    console.log('Server failed to start due to error: %s', err);
  });