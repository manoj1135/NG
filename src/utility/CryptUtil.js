const crypto = require('crypto');
const hashAlgo = "sha256";
module.exports.getEncryptedString = function(plainText){
    return crypto.createHash(hashAlgo).update(plainText).digest('base64');
}

module.exports.validateEncr = function(plainText, encodedText){
  return this.getEncryptedString(plainText) === encodedText;
}
