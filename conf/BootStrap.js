const path = require('path');
const confDir = __dirname;
const dbDir = path.join(confDir+'/db');
const database = require(path.join(dbDir+"/Database"));
module.exports = {
  database
}
