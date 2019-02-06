console.log("initializing application....");

const path = require('path');
const rootDir = __dirname;
const webDir = path.join(rootDir+'/web');
const confDir = path.join(rootDir+'/conf');
const dbDir = path.join(confDir+'/db');
const nodeDir = path.join(rootDir+"/node_modules");

const express = require('express');
const bodyParser = require('body-parser');
const boot = require(path.join(confDir+"/BootStrap"));
const logger = require('morgan');
const AppConf = require(path.join(confDir+"/AppConf"));
const app = express();
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(webDir));
app.use('/jquery', express.static(nodeDir+'/jquery/dist/'));
app.use('/angular', express.static(nodeDir+'/angular/'));
app.use('/datepicker', express.static(nodeDir+'/angularjs-datepicker/dist/'));
app.use('/router', express.static(nodeDir+'/angular-ui-router/release/'));
app.use('/bootstrap', express.static(nodeDir+'/bootstrap/dist/'));
app.use('/ngroute', express.static(nodeDir+'/angular-route/'));
app.use('/jqueryui', express.static(nodeDir+'/jquery-ui-dist/'));
app.use('/fontawesome', express.static(nodeDir+'/@fortawesome/fontawesome-free/'));
app.use(cookieParser());

require("./src/routes")(app);
var serverConfig =boot.SYSCONFIG.path().server;

boot.database.sequelize.sync({force:AppConf.isReloadDB})
  .then(app.listen(serverConfig.default.port, ()=>{
    console.log("Server is started on port "+serverConfig.default.port);
  }))
  .catch(function(err) {
    console.log('Server failed to start due to error: %s', err);
  });
