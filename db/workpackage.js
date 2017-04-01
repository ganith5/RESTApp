/**
 * Created by pavithraabhishek on 3/25/17.
 */


var model = require('../models/workpackage')

exports.select = function (criteria, callback) {

    model.select(criteria, function(error, data){

        console.log("db/workpackage/select")
        callback(error, data)
    })

    

}


exports.save = function(data, callback) {
    new model.workpackage(data).save(function(error, insertedDoc){
        console.log("Workpackage inserted is : " + JSON.stringify(data));
        callback(error, insertedDoc);
    })
}