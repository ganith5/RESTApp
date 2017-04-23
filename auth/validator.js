/**
 * Created by pavithraabhishek on 4/22/17.
 */

var jwt = require('jwt-simple')
var jwtAuth = require('./jwtauth')

var tokenStore = require('./tokenstore')

var auth = function(req, res, next) {
    console.log("inside validator")
    var token = req.headers[jwtAuth.params.PT_TOKEN_HEADER];

    console.log("inside validator token = " + token)

    if(token === undefined) {
        res.sendMessage = 'Unauthorized: Token not provided';
        res.sendStatus('401').end();
    }

    else {

        var decoded = jwt.decode(token, jwtAuth.params.JWT_TOKEN_SECRET);
        console.log("Decoded = " + decoded);
        console.log("Token Store : " + tokenStore)
        if(!tokenStore.isValid(token)) {
            console.log("Not valid!!");
            res.statusMessage = 'Unauthorized: Token not provided';
            res.sendStatus('401')
            return;
        }
        next()
    }
}

exports.auth = auth;