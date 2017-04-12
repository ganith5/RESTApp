/**
 * Created by pavithraabhishek on 3/27/17.
 */


/**
 * Created by pavithraabhishek on 3/27/17.
 */


/**
 * Created by pavithraabhishek on 3/25/17.
 */


process.env.DB_URI = "mongodb://ds137090.mlab.com:37090/openprojdb"
process.env.DB_USER = "openproj"
process.env.DB_PASSWORD = "openproj"

var projectDb = require('../db/projects')
var projectData = require('../data/projects')





// projectDb.save(projectData.SingleRow, function(error, retData){
//     if(error){
//         console.log("Unable to save [Project] data : " + JSON.stringify(error))
//     }
//     else {
//         console.log("Project record saved : " + JSON.stringify(retData))
//     }
// });


projectDb.select({pid: 123}, function (error, data) {

    if(error) {
        console.log("Error in saving project");
    } else {
        console.log("Project records returned" + data);
    }

})









