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
        criteria = { wid: {$in : wId}}
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
                    res.status(404)
                }
                console.log("Retrieved workpackages = %d",wkpDocs.length);
                console.log("Retrieved workpackages json = ", JSON.stringify(wkpDocs));
                res.send(wkpDocs);


            }
        });
    });
}