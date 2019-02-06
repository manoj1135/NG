console.log("Bootstrapping application...");

const path = require('path');
const fs = require("fs");
const confDir = __dirname;
const dbDir = path.join(confDir+'/db');
const ConfigLoader = require(path.join(confDir+"/ConfigLoader"));
const database = require(path.join(dbDir+"/Database"));
const SYSCONFIG = ConfigLoader.load("system_config");
module.exports = {
  database,
  SYSCONFIG
}
