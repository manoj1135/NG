console.log("Loading GenericUtil...");
const path = require('path');
const fs = require("fs");
const utilDir = __dirname;
const srcDir = path.join(utilDir+"/../");
const confDir = path.join(srcDir+"../conf");
const ConfigLoader = require(path.join(confDir+"/ConfigLoader"));
const webDir = path.join(confDir+"/../web");

let loadModules = function(user){
    var allModules = ConfigLoader.loadModules();
    return allModules.modules;
}

let loadServices = function(){
    var items = fs.readdirSync(path.join(webDir+"/services"));
    return items;
}

module.exports={
    loadServices,
    loadModules
}