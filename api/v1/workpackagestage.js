/**
 * Created by pavithraabhishek on 4/19/17.
 */


var RESOURCE = 'workpackagestage'
var VERSION = 'v1'
var URI = '/' + VERSION + '/' + RESOURCE


process.env.DB_URI = "mongodb://ds137090.mlab.com:37090/openprojdb"
process.env.DB_USER = "openproj"
process.env.DB_PASSWORD = "openproj"


var workPackageStageDB = require('../../db/workpackagestage')
var apiConstants = require('../../util/constants')
var jwtValidator = require('../../auth/validator')
var auth = jwtValidator.auth;

module.exports = function(router) {
    'use strict';


    router.route(URI).get(auth, function (req, res, next) {

        console.log("URI : " + URI);
        var criteria = {};

        console.log("criteria static data : " + JSON.stringify(criteria));
        workPackageStageDB.select(criteria, function (err, wkpStageDocs) {

            if (err) {
                res.setHeader('content-type', 'application/json');
               // var returnError = processErrors(err, 'GET', URI);
                res.status(apiConstants.HTTP_STATUS_CODE_400).send(err);
            } else {
                res.header('Cache-Control', 'public, max-age=60')
                console.log("Retrieved workpackages = %d", wkpStageDocs.length);
                res.status(apiConstants.HTTP_STATUS_CODE_200).send(wkpStageDocs);


            }
        });
    });
}