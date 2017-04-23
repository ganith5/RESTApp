/**
 * Created by pavithraabhishek on 4/22/17.
 */

var jwt = require('jwt-simple')
var moment = require('moment')

var usersDB = require('../db/users')
var tokenStore = require('./tokenstore')

var jwtParams = {
    JWT_TOKEN_SECRET: 'whateversecret',
    JWT_TOKEN_ISSUER: 'Project tracker',
    PT_TOKEN_HEADER: 'x-pt-token',
    JWT_TOKEN_EXPIRY: 60
}


var auth = function(req, res) {

    if(req.body) {

        usersDB.checkCredentials(req.body.name, function(error, user) {
            if(error){

                res.sendStatus(401);

            } else {
                var expires = moment().add(jwtParams.JWT_TOKEN_EXPIRY, 'seconds').valueOf();

                var payload = {
                    //Registered claims
                    exp: expires,
                    iss: jwtParams.JWT_TOKEN_ISSUER,
                    //Public claims
                    name: user.fname
                }

                //Header encode is handled internally by JWT
                var token = jwt.encode(payload, jwtParams.JWT_TOKEN_SECRET)

                tokenStore.add(token, payload)

                res.json({token: token})
            }
        })



    }

}

exports.auth = auth;
exports.params = jwtParams;
