/**
 * Created by pavithraabhishek on 3/27/17.
 */

var model = require("../models/projects")

exports.save = function(data, callback) {
   // console.log("Saving project documents = " + JSON.stringify(data));

    new model.projects(data).save(function(error, insertedRec){
        callback(error, insertedRec);
    })
}

exports.select = function (criteria, callback) {

  //  console.log("db/projects : " + criteria)
  //   model.projects.find(criteria, function (err, data) {
  //       callback(err, data)
  //   })

    model.projects.find(criteria)
        .populate('members', 'userId fname')
        .exec(function(error, projectDoc){
            console.log("Project document : " + JSON.stringify(projectDoc));
            callback(error, projectDoc);
        })
}
