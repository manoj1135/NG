const database = require("../conf/db/Database");
var session = require('express-session');
const express = require('express');
const router = express.Router();
const path = require('path');
const utilDir = path.join(__dirname+"/utility");
const GenericUtil = require(path.join(utilDir+"/GenericUtil"));
module.exports = function(app){
    app.use(session({
        key: 'user_sid',
        secret: 'somerandonstuffs',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000
        }
    }));

    // Route all GET request to index
    app.get('/*', (req, res) => {
        // console.log("req ",req);
        res.redirect('/');
    });

    // Filter all the requests here
    // app.use('*', function (req, res, next) {
    //     let method = req.method;
    //     console.log('Request Type:', req.method);
    //     console.log("Request url: ",req.originalUrl);
    //     next();
    // })

    app.post("/api/validateUser",(req, res)=>{
        var user = req.body.user;
        database.Users.validateUser(user).
        done((response)=>{
            res.send(response);
        });
    });

    app.post("/api/forgotPassword",(req, res)=>{
        let fpResponse = {};
        var user = req.body.user;
        database.Users.getUserByUserName(user).
        done((response)=>{
            if(response.errorCode == "00000"){
              database.MagicLinks.generateMagicLinks(req, response.data)
              .done((mlResp) => {
                  res.send(mlResp);
              });
            }else{
                res.send(response);
            }
        });
    });

    app.post("/api/resetPassword",(req, res)=>{
        var user = req.body.user;
        console.log("user ",user);
        var params = req.body.params;
        console.log("params ",params);
        database.Users.resetPassword(user, params)
        .done((response)=>{
          res.send(response);
        });
    });

    app.post("/api/addUser",(req, res)=>{
        var user = req.body.user;
        database.Users.addUser(user).
        done((response)=>{
            res.send(response);
        });
    });

    app.post("/api/loadServices", (req, res)=>{
        var items = GenericUtil.loadServices();
        res.send(items);
    });
}
