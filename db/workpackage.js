/**
 * Created by pavithraabhishek on 3/25/17.
 */


var model = require('../models/workpackage')

// exports.select = function (criteria, callback) {
//
//     model.workpackage.find(criteria, function(error, data){
//
//         console.log("db/workpackage/select")
//         callback(error, data)
//     })
//
//
// }


exports.select = function (criteria, callback) {
    console.log("Select wKP = " + JSON.stringify(criteria));
    model.workpackage.find(criteria)
        .populate('assignee', 'userId fname')
        .exec(function(error, workPackageList){
            console.log("List of workpackages = " + JSON.stringify(workPackageList));
            callback(error, workPackageList);
        });


}


// exports.save = function(data, callback) {
//     new model.workpackage(data).save(function(error, insertedDoc){
//         console.log("Workpackage inserted is : " + JSON.stringify(data));
//         callback(error, insertedDoc);
//     })
// }