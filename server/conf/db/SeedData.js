const database = require("./Database");

var seedUser = function(){
    var user = {
        email:"admin@123.com",
        password:"Admin@123",
        firstName:"Adiministrator",
        lastName:"Admin",
        dob:"2018-10-18",
        userType:{
            id:"1"   
        },
        userRole:{
            id:"1"
        },
    };
    console.log("user ",user);
    console.log("database ",database);
    database.Users.addUser(user).
    done((response)=>{
        console.log("response ",response);
        console.log("User saved..");
    });
}
module.exports.seedUser = seedUser;