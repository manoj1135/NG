console.log("Loading system properties...");
const path = require('path');
const fs = require('fs');
const PropertiesReader = require('properties-reader');
const dataDir = path.join(__dirname+'/data');


let load = function(configName){
    var properties = PropertiesReader(path.join(dataDir+'/'+configName+'.properties'));
    return properties;
}

let loadModules = function(){
    let rawdata = fs.readFileSync(path.join(dataDir+'/WebModules.json'));  
    return JSON.parse(rawdata);  
}

module.exports.load = load;
module.exports.loadModules = loadModules;