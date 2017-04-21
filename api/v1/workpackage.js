/**
 * Created by pavithraabhishek on 4/10/17.
 */


var RESOURCE = 'workpackage'
var VERSION = 'v1'
var URI = '/' + VERSION + '/' + RESOURCE
var WID_PARAM = ':wid'
var FIND_BY_WID_PARAM = URI + '/' + WID_PARAM
var CREATE = URI+ '/' +WID_PARAM+'/'+ 'create'
var UPDATE = URI + '/' + WID_PARAM + '/' + 'update'
var DELETE = URI + '/' + WID_PARAM + '/' + 'remove'

process.env.DB_URI = "mongodb://ds137090.mlab.com:37090/openprojdb"
process.env.DB_USER = "openproj"
process.env.DB_PASSWORD = "openproj"


var workPackageDB = require('../../db/workpackage')
var apiErrors = require('../../util/errors')
var apiConstants = require('../../util/constants')

module.exports = function(router){
    'use strict';

    //    /v1/workpackage

    router.route(URI).get(function(req, res, next){
        var criteria = {};
        var wId = req.query.wid;
        if(wId) {
            criteria = { wid: {$in : wId}}
        } else {
            criteria = { wid: {$in : []}}
        }

        console.log("criteria workpackage : " + JSON.stringify(criteria));
        workPackageDB.select(criteria, function(err, wkpDocs){

            if(err){
                res.setHeader('content-type', 'application/json');
                var returnError = processErrors(err, 'GET', URI);
                res.status(apiConstants.HTTP_STATUS_CODE_400).send(returnError);
            } else {
                if(wkpDocs.length == 0){
                    //res.status(404)
                }
                console.log("Retrieved workpackages = %d",wkpDocs.length);
                res.status(apiConstants.HTTP_STATUS_CODE_200).send(wkpDocs);


            }
        });
    });

    router.route(FIND_BY_WID_PARAM).get(function(req, res, next){
        var criteria = {};
        var wId = (req.params.wid).split(",");
        //console.log("URI = " + URI + " WID = " + wId)
        if(wId) {
            criteria = { wid: {$in : wId}}
        } else {
            criteria = { wid: {$in : []}}
        }

        console.log("criteria workpackage : " + JSON.stringify(criteria));
        workPackageDB.select(criteria, function(err, wkpDocs){

            if(err){
                res.setHeader('content-type', 'application/json');
                var returnError = processErrors(err, 'GET', apiConstants.HTTP_STATUS_CODE_400, FIND_BY_WID_PARAM);
                res.status(apiConstants.HTTP_STATUS_CODE_400).send(returnError);
            } else {
                if(wkpDocs.length == 0){
                    //res.status(404)
                }
                //console.log("Retrieved workpackages json = ", JSON.stringify(wkpDocs));
                res.status(apiConstants.HTTP_STATUS_CODE_200).send(wkpDocs);


            }
        });
    });


    router.route(CREATE).post(
        function(req, res, next){
            var doc = req.body;
            workPackageDB.save(doc, function(err, insertedWkpDoc){
                if(err){
                    res.setHeader('content-type', 'application/json');
                    var returnError = processErrors(err, 'POST', apiConstants.HTTP_STATUS_CODE_400, CREATE);
                    res.status(apiConstants.HTTP_STATUS_CODE_400).send(returnError)
                } else {

                    res.status(apiConstants.HTTP_STATUS_CODE_200).send(insertedWkpDoc);
                }
            });


        });


    router.route(UPDATE).put(
        function(req, res, next){
            var wId = req.params.wid;
            var criteria = { wid: {$eq : wId}};
            var updatedWorkPackage = req.body;

            workPackageDB.update(criteria, updatedWorkPackage, function(err, saved){
                if(err){
                    res.setHeader('content-type', 'application/json');
                    var returnError = processErrors(err, 'PUT', apiConstants.HTTP_STATUS_CODE_400, UPDATE);
                    res.status(apiConstants.HTTP_STATUS_CODE_400).send(returnError)
                } else {
                    res.status(apiConstants.HTTP_STATUS_CODE_200).send(saved)
                }
            });
        });

    router.route(DELETE).delete(
        function(req, res, next){
            var wId = req.params.wid;
            var criteria = { wid: {$eq : wId}};
            workPackageDB.delete(criteria, function(err, removed){
                if(err){
                    res.setHeader('content-type', 'application/json');
                    var returnError = processErrors(err, 'DELETE', apiConstants.HTTP_STATUS_CODE_400, DELETE);
                    res.status(apiConstants.HTTP_STATUS_CODE_400).send(returnError)
                } else {
                    res.status(apiConstants.HTTP_STATUS_CODE_200).send(removed)
                }
            });
        });





}

var processErrors = function(error, httpMethod, statusCode, resourceURI) {


    var returnErrors = [];

    if(error.errors.type) {
        returnErrors.push(apiErrors.create(error.errors.type, httpMethod, statusCode, resourceURI));
    }

    if(error.errors.status) {
        returnErrors.push(apiErrors.create(error.errors.status, httpMethod, statusCode, resourceURI));
    }

    if(error.errors.subject) {
        returnErrors.push(apiErrors.create(error.errors.subject, httpMethod, statusCode, resourceURI));
    }

    if(error.errors.assignee) {
        returnErrors.push(apiErrors.create(error.errors.assignee, httpMethod, statusCode, resourceURI));
    }

    console.log("Returned errors = " + returnErrors)

    return returnErrors;


}

// router.route(URI).put(
//     function(req, res, next){
//         var wId = req.query.wid;
//         var criteria = { wid: {$eq : wId}};
//         var updatedWorkPackage = req.body;
//
//         workPackageDB.update(criteria, updatedWorkPackage, function(err, saved){
//             if(err){
//                 res.setHeader('content-type', 'application/json');
//                 var returnError = processErrors(err, 'PUT', URI);
//                 res.status(apiConstants.HTTP_STATUS_CODE_400).send(returnError)
//             } else {
//                 res.status(apiConstants.HTTP_STATUS_CODE_200).send(saved)
//             }
//         });
//
//
//
//
//     });
