/**
 * Created by pavithraabhishek on 4/10/17.
 */


var RESOURCE = 'workpackage'
var VERSION = 'v1'
var URI = '/' + VERSION + '/' + RESOURCE

process.env.DB_URI = "mongodb://ds137090.mlab.com:37090/openprojdb"
process.env.DB_USER = "openproj"
process.env.DB_PASSWORD = "openproj"


var workPackageDB = require('../../db/workpackage')


module.exports = function(router){
    'use strict';

    //    /v1/workpackage

    router.route(URI).get(function(req, res, next){
        var criteria = {};
        var wId = req.query.wid;
        console.log("URI = " + URI + " WID = " + wId)
        if(wId) {
            criteria = { wid: {$in : wId}}
        } else {
            criteria = { wid: {$in : []}}
        }

        console.log("Criteria = " + criteria);

        console.log("criteria workpackage : " + JSON.stringify(criteria));
        //2. execute the query
        workPackageDB.select(criteria, function(err, wkpDocs){

            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if(wkpDocs.length == 0){
                    //res.status(404)
                }
                console.log("Retrieved workpackages = %d",wkpDocs.length);
                console.log("Retrieved workpackages json = ", JSON.stringify(wkpDocs));
                res.status(200).send(wkpDocs);


            }
        });
    });


    router.route(URI).post(
        function(req, res, next){

            //1. Get the data
            var doc = req.body;
            console.log("Request body : " + JSON.stringify(doc));

            //2. Call the insert method
            // workPackageDB.saveMany(doc, function(err, workPackageList){
            //     if(err){
            //         console.log("Response has error");
            //         res.setHeader('content-type', 'application/json');
            //         res.status(400).send(err)
            //     } else {
            //
            //         res.status(200).send(workPackageList);
            //     }
            // });

            workPackageDB.save(doc, function(err, insertedWkpDoc){
                if(err){
                    console.log("Response has error");
                    res.setHeader('content-type', 'application/json');
                    res.status(400).send(err)
                } else {

                    res.status(200).send(insertedWkpDoc);
                }
            });


        });

    router.route(URI).put(
        function(req, res, next){
            var wId = req.query.wid;
            var criteria = { wid: {$eq : wId}};
            var updatedWorkPackage = req.body;

            workPackageDB.update(criteria, updatedWorkPackage, function(err, saved){
                if(err){

                    res.setHeader('content-type', 'application/json');
                    res.status(400).send(err)
                } else {
                    res.status(200).send(saved)
                }
            });




        });


}