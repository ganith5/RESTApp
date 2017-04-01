/**
 * Created by pavithraabhishek on 3/27/17.
 */
var RESOURCE = 'projects'
var VERSION = 'v1'
var URI = '/' + VERSION + '/' + RESOURCE

process.env.DB_URI = "mongodb://ds137090.mlab.com:37090/openprojdb"
process.env.DB_USER = "openproj"
process.env.DB_PASSWORD = "openproj"

var db = require('../../db/projects')


module.exports = function(router){
    'use strict';

    //    /v1/projects
    router.route(URI).get(function(req, res,next){
        console.log("GET Projects")
        //1. Setup query riteria for the active pacakages
        var criteria = {pid : {$eq : 1230}}
        console.log("criteria project : " + JSON.stringify(criteria));
        //2. execute the query
        db.select(criteria, function(err, docs){

            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if(docs.length == 0){
                    res.status(404)
                }
                console.log("Retrieved projects = %d",docs.length)
                res.send(docs)
            }
        });
    });

    // CREATE new projects packages
    router.route(URI).post(
        function(req, res, next){
        console.log("POST  Projects -> ")

        //1. Get the data
        var doc = req.body;
        console.log("Request body : " + JSON.stringify(doc));

        //2. Call the insert method
        db.save(doc, function(err, saved){
            if(err){
                // The returned error need to be defined better - in this example it is being left as is
                //res.status(400).send(err)

                //var userError = processMongooseErrors(apiMessages.errors.API_MESSAGE_CREATE_FAILED, "POST", URI, err, {});
                res.setHeader('content-type', 'application/json');
                res.status(400).send(err)
            } else {
                res.send(saved)
            }
        });


    });
}
