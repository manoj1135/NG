const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
module.exports.getEncryptedString = function(plainText){
    return bcrypt.hashSync(plainText, salt);
}

module.exports.validateEncr = function(plainText, encodedText){
  return bcrypt.compareSync(plainText, encodedText);
}
