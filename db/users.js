/**
 * Created by pavithraabhishek on 3/25/17.
 */
var model = require('../models/users')


exports.select = function (criteria, callback) {

    console.log("db/users : " + criteria)
    model.Users.find(criteria, function (err, data) {
        callback(err, data)
    })
}

exports.save = function(data, callback) {

    new model.Users(data).save(function (err, insertedRecord) {
        callback(err, insertedRecord)

    })
}

exports.saveMany = function(multipleRecs, callback) {

     model.Users.insertMany(multipleRecs, function (err, insertedRecords) {
        callback(err, insertedRecords)

    })
}



exports.update = function(criteria, callback) {
    console.log("db/users : update called")
    model.users.update(criteria, function(error, data){
        callback(error, data)
    })
}


