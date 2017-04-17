/**
 * Created by pavithraabhishek on 3/25/17.
 */


var model = require('../models/workpackage')

exports.saveMany = function(wkpReqList, callback) {
    console.log("Request Data = " + JSON.stringify(wkpReqList));
    model.workpackage.insertMany(wkpReqList, function (err, insertedWkpDocs) {
        console.log("Workpackage inserted is : " + JSON.stringify(insertedWkpDocs));
        callback(err, insertedWkpDocs)

    })
}


exports.select = function (criteria, callback) {
    console.log("Select wKP = " + JSON.stringify(criteria));
    model.workpackage.find(criteria)
        .populate('assignee', 'userId fname')
        .exec(function(error, workPackageList){
            //console.log("List of workpackages = " + JSON.stringify(workPackageList));
            callback(error, workPackageList);
        });


}


exports.save = function(data, callback) {
    console.log("Request Data = " + JSON.stringify(data));
    new model.workpackage(data).save(function(error, insertedWkpDoc){
        //console.log("Workpackage inserted is : " + JSON.stringify(insertedWkpDoc));
        callback(error, insertedWkpDoc);
    })
}

exports.update = function(criteria, workPackage, callback) {

    console.log("Criteria = " + JSON.stringify(criteria));
    model.workpackage.update(criteria, workPackage, {multi: true}, function(error, updatedRecord){
       // console.log("Workpackage Updated = " + JSON.stringify(workPackage));
        callback(error, updatedRecord);
    });
}