/**
 * Created by pavithraabhishek on 3/25/17.
 */

var settings = require('../db/settings')
var userModel = require('../models/users')
var wkpModel = require('../models/workpackage')
var mongoose = settings.mongoose
var usersSchema = userModel.Users.schema
var workPackageSchema = wkpModel.workpackage.schema


var projectSchema = mongoose.Schema({
    pid: {type: Number, required:[true, 'Id is a mandatory value']},
    name: {type: String, required: [true, 'Project name is a required value']},
    description: {type: String},
    type: {type: String, enum: ['Scrum Team', 'Standard Project']},
    members: [usersSchema],
    workPackages: [workPackageSchema],
    creationDate: {type: Date},
    modificationDate: {type: Date}
});

exports.projects = mongoose.model('projects', projectSchema);
