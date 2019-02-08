console.log("Invoking Users db helper...");
const ErrorCodes = require("../../conf/db/ErrorCodes");
const CryptUtil = require("../utility/CryptUtil");
const GenericUtil = require("../utility/GenericUtil");

module.exports = function(Users){
  Users.validateUser = (luser) => {
    console.log("Validating user...");
    return Users.findOne({
      where:{
        userName:luser.email
      }
    }).then(function(ruser) {
          let isPassValid = CryptUtil.validateEncr(luser.password, ruser.password);
          if(!isPassValid){
            return {
              errorCode : "10001",
              message: ErrorCodes["10001"],
            }
          }
          let user = ruser.toJSON();
          let userModules = GenericUtil.loadModules(user);
         return {
           errorCode : "00000",
           message: ErrorCodes["00000"],
           data : {
            user:user,
            userModules:userModules
           }
         }
    }).catch(function (err) {
      return {
        errorCode : "10001",
        message: ErrorCodes["10001"],
      }
    });
  }
  Users.getUserByUserName = (user) => {
    console.log("Validating username...");
    return Users.findOne({
      where:{
        userName:user.email
      }
    }).then(function(resp) {
         return {
           errorCode : "00000",
           message: ErrorCodes["00000"],
           data : resp.toJSON()
         }
    }).catch(function (err) {
      return {
        errorCode : "10002",
        message: ErrorCodes["10002"],
      }
    });
  }
  Users.addUser = (user) => {
      return Users.create({
        userName:user.email,
        password:CryptUtil.getEncryptedString(user.password),
        firstName:user.firstName,
        lastName:user.lastName,
        dob:new Date(user.dob),
        userType:user.userType.id,
        userRole:user.userRole.id,
        createdBy:"admin",
        modifiedBy:"admin"
      }).then(function(resp) {
           return {
             errorCode : "00000",
             message: ErrorCodes["00000"],
             data : resp.toJSON()
           }
      }).catch(function (err) {
        return {
          errorCode : "10004",
          message: ErrorCodes["10004"],
        }
      });
  }
  Users.resetPassword = (user, params) => {
      let newPassword = CryptUtil.getEncryptedString(user.password);
      let isUserValid = CryptUtil.validateEncr(params.user, params.key);
      if(!isUserValid){
          return {
            errorCode : "10007",
            message: ErrorCodes["10007"],
          }
      }
      return Users.getUserByUserName({email:params.user}).then((rRsp)=>{
          if(rRsp.errorCode === "00000"){
              let rUser = rRsp.data;
              console.log(rUser);
              if(newPassword === rUser.password){
                return {
                  errorCode : "10008",
                  message: ErrorCodes["10008"],
                }
              }
              return Users.update(
                {password : newPassword},
                {where: {id:rUser.id}}
              ).then((resp)=>{
                console.log(resp);
                return {
                  errorCode : "00000",
                  message: ErrorCodes["00000"],
                  data : resp
                }
              }).catch(function (err) {
                console.log(err);
                return {
                  errorCode : "10009",
                  message: ErrorCodes["10009"],
                }
              });
          }
      });
  }
}
