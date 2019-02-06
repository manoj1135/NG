console.log("Loading system properties...");
const path = require('path');
const PropertiesReader = require('properties-reader');
const dataDir = path.join(__dirname+'/data');

var load = function(configName){
    var properties = PropertiesReader(path.join(dataDir+'/'+configName+'.properties'));
    return properties;
}
module.exports.load = load;