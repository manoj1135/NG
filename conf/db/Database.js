console.log("Invoking database....");
const fs = require('fs');
const dbconf = require("./db-config");
const Sequelize = require("sequelize");
const dbDir = __dirname;
const modelDir = dbDir+"/models";
var sequelize = new Sequelize(
    dbconf.database,
    dbconf.user,
    dbconf.password,
    {
      host: dbconf.host,
      port: dbconf.port,
      dialect: 'mysql'
    }
  );

var db = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
console.log(sequelize);
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully. ');
    console.log("Invoking models...");
    fs.readdir(modelDir, function(err, items) {
        for (var i=0; i<items.length; i++) {
            let modelFile = items[i].split(".js")[0];
            db[modelFile] = require("./models/"+modelFile)(sequelize, Sequelize);
        }
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = db;
