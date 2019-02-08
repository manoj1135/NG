console.log("Loading GenericUtil...");
const path = require('path');
const utilDir = __dirname;
const srcDir = path.join(utilDir+"/../");
const confDir = path.join(srcDir+"../conf");
const ConfigLoader = require(path.join(confDir+"/ConfigLoader"));

let loadModules = function(user){
    var allModules = ConfigLoader.loadModules();
    return allModules.modules;
}

module.exports.loadModules = loadModules;