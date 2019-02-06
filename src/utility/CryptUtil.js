const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
module.exports.getEncryptedString = function(plainText){
    return cryptr.encrypt(plainText);
}

module.exports.validateEncr = function(plainText, encodedText){
  return cryptr.encrypt(plainText) === encodedText;
}
