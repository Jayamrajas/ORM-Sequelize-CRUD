var passport = require("passport");  
var passportJWT = require("passport-jwt");  
var models = require("../models/Users");
var db = require("../models/index");
var config = require('../config/config.json').jwt;
var ExtractJwt = passportJWT.ExtractJwt;  
var Strategy = passportJWT.Strategy;  
var params = {  
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};


module.exports = function(){
    console.log("inside funnn-----------");
    var strategy = new Strategy(params, function(payload, done){
        db.Users.find({ where: {id: payload.id} }).then(function(data){
            console.log(data);
            var user = data;
            if(user) {
                console.log("inside funnn-----user------");
                return done(null, {
                    id: user.id
                });
            } else {
                return done(new Error("User not found"), null);
            }
        });
    });
    console.log("inside funnn----strategy-------");
    passport.use(strategy);
    return {
        initialize: function() {
            console.log("inside funnn---------initialize paass--");
            return passport.initialize();
        },
        authenticate: function() {
            console.log("inside funnn--------auth paass---");
            return passport.authenticate("jwt", config.jwtSession);
        }
    };
};