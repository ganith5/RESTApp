/**
 * Created by pavithraabhishek on 3/27/17.
 */


/**
 * Created by pavithraabhishek on 3/25/17.
 */


process.env.DB_URI = "mongodb://ds137090.mlab.com:37090/openprojdb"
process.env.DB_USER = "openproj"
process.env.DB_PASSWORD = "openproj"

var wkpDb = require('../db/workpackage')
var wkpData = require('../data/workpackage')





// wkpDb.save(wkpData.SingleRow, function(error, retData){
//     if(error){
//         console.log("Unable to save [WorkPackage] data : " + JSON.stringify(error))
//     }
//     else {
//         console.log("WorkPackage record saved : " + JSON.stringify(retData))
//     }
// });

wkpDb.select({wid: 123}, function(error, data){

    if(error) {
        console.log("Unable to query workPackage");
    }else{
        console.log("Queried data = " + JSON.stringify(data));
    }
})


// userDb.saveMany(userData.MultipleRows, function(error, retData){
//     if(error){
//         console.log("unable to save data" + JSON.stringify(error))
//     }
//     else {
//         console.log("Records saved!" + retData)
//     }
// });








