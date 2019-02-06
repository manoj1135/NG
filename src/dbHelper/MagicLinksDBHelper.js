console.log("Invoking MagicLinks db helper...");
const ErrorCodes = require("../../conf/db/ErrorCodes");
const CryptUtil = require("../utility/CryptUtil");
module.exports = function(MagicLinks){
    MagicLinks.generateMagicLinks = (req, user) => {
        return MagicLinks.create({
          linkUrl:_getEncodedUrl(req, user),
          linkUser:user.userName,
          generatedBy:"admin"
        }).then((resp)=>{
             return {
               errorCode : "00000",
               message: ErrorCodes["00000"],
               data : resp.toJSON()
             }
        }).catch((err)=>{
          if("ER_DUP_ENTRY" == err.parent.code){
            return {
              errorCode : "10006",
              message: ErrorCodes["10006"],
            }
          }
          return {
            errorCode : "10005",
            message: ErrorCodes["10005"],
          }
        });
    }

    var _getEncodedUrl = (req, user) => {
        let url = req.headers.origin+"/#/resetPassword";
        url+="?user="+user.userName
        url+="&key="+CryptUtil.getEncryptedString(user.userName)
        return url;
    }
}
