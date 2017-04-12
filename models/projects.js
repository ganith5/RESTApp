/**
 * Created by pavithraabhishek on 3/25/17.
 */

var settings = require('../db/settings')
var mongoose = settings.mongoose
require('../models/users')
//var wkpModel = require('../models/workpackage')

//var usersSchema = userModel.Users.schema
//var workPackageSchema = wkpModel.workpackage.schema




var projectSchema = mongoose.Schema({
    pid: {type: String, required:[true, 'Id is a mandatory value']},
    name: {type: String, required: [true, 'Project name is a required value']},
    description: {type: String},
    type: {type: String, enum: ['Scrum Team', 'Standard Project']},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}],
    workPackages: [{type: Number, ref: 'workpackage'}],
    creationDate: {type: Date},
    modificationDate: {type: Date}
});

exports.projects = mongoose.model('projects', projectSchema);


