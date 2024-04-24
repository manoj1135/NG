console.log("Reading database configuration...");
const path = require('path');
const dbDir = path.join(__dirname);
const confDir = path.join(dbDir+'/../');
const ConfigLoader = require(path.join(confDir+"/ConfigLoader"));
const DBCONFIG = ConfigLoader.load("db_config");
module.exports = {
  database:DBCONFIG.get("database"),
  host:DBCONFIG.get("host"),
  port:DBCONFIG.get("port"),
  user:DBCONFIG.get("user"),
  password:DBCONFIG.get("password")
}