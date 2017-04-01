/**
 * Created by pavithraabhishek on 3/25/17.
 */


process.env.DB_URI = "mongodb://ds137090.mlab.com:37090/openprojdb"
process.env.DB_USER = "openproj"
process.env.DB_PASSWORD = "openproj"


var userDb = require('../db/users')
var userData = require('../data/users')



userDb.save(userData.SingleRow, function(error, retData){
    if(error){
        console.log("unable to save data" + JSON.stringify(error))
    }
    else {
        console.log("Record saved" + retData)
    }
});


userDb.saveMany(userData.MultipleRows, function(error, retData){
    if(error){
        console.log("unable to save data" + JSON.stringify(error))
    }
    else {
        console.log("Records saved!" + retData)
    }
});








