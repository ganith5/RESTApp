/**
 * Created by pavithraabhishek on 2/20/17.
 */

var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



var router = new express.Router();
require('./api/v1/projects')(router);
require('./api/v1/workpackage')(router);
require('./api/v1/users')(router);
require('./api/v1/workpackagestage')(router);
require('./api/v1/workpackagetype')(router);

//****************  Basic authentication  *****************************
//var basicauth = require('./auth/basicauth')
//var auth = basicauth.auth
//app.use(auth, router);

//**********************************************************************


//----------------  Token generation -----------------------------------

//Token based authentication
var jwtAuth = require('./auth/jwtauth')
//var jwtValidator = require('./auth/validator')
var auth = jwtAuth.auth;

router.post('/token', auth, function(req, res) {
    console.log("Access provided!")

    res.send('token');
})


/*auth = jwtValidator.auth;

router.get('/private', auth, function(req,res){
    res.send('Access granted to private resource!!!')
});*/

app.use(router);

//------------------------------------------------------------------------





app.listen(3000);
console.log('Listening on port 3000...');