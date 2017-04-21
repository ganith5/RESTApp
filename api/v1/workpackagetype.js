/**
 * Created by pavithraabhishek on 4/19/17.
 */


/**
 * Created by pavithraabhishek on 3/27/17.
 */
var RESOURCE = 'workpackagetype'
var VERSION = 'v1'
var URI = '/' + VERSION + '/' + RESOURCE

process.env.DB_URI = "mongodb://ds137090.mlab.com:37090/openprojdb"
process.env.DB_USER = "openproj"
process.env.DB_PASSWORD = "openproj"

var workPackageTypesDB = require('../../db/workpackagetypes')


module.exports = function(router){
    'use strict';

    router.route(URI).get(function(req, res, next){
        var criteria = {};

        console.log("criteria project : " + JSON.stringify(criteria));
        workPackageTypesDB.select(criteria, function(err, docs){

            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                    console.log("Retrieved projects = %d", docs.length)
                    res.header('Cache-Control', 'public, max-age=60')
                    res.send(docs);

            }
        });
    });
}
