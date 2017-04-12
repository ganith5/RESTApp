/**
 * Created by pavithraabhishek on 4/11/17.
 */


var RESOURCE = 'users'
var VERSION = 'v1'
var URI = '/' + VERSION + '/' + RESOURCE

process.env.DB_URI = "mongodb://ds137090.mlab.com:37090/openprojdb"
process.env.DB_USER = "openproj"
process.env.DB_PASSWORD = "openproj"


var usersDB = require('../../db/users')

module.exports = function(router) {

    router.route(URI).get(function(req, res, next){
        console.log("Get users ........");
        var criteria = {};
        var projectId = req.query.projectId;
        console.log("User Id = " + projectId);
        criteria = {projectId : {$eq : projectId}}


        console.log("criteria users : " + JSON.stringify(criteria));
        //2. execute the query
        usersDB.select(criteria, function(err, userDocs){

            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if(userDocs.length == 0){
                    res.status(404)
                }
                console.log("Retrieved projects = %d", userDocs.length)
                res.send(userDocs);


            }
        });
    });

}