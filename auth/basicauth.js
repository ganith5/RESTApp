/**
 * Created by pavithraabhishek on 4/22/17.
 */

var usersDB = require('../db/users')

var passport = require('passport')

var BasicStrategy = require('passport-http').BasicStrategy


passport.use(new BasicStrategy(function (username, password, done) {


    usersDB.checkCredentials(username, function (error, user) {
        if(error){
            console.log("Error in authentication");
        } else {
            if(user){
                console.log("Authenticated!");
                return done(null, true)
            } else {
                console.log("Didnt authenticate");
                return done(null, false)
            }
        }
    })


}))

var auth = passport.authenticate('basic', {session: false})

exports.auth = auth;
