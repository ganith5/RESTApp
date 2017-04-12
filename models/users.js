/**
 * Created by pavithraabhishek on 3/25/17.
 */

var settings = require('../db/settings');
var mongoose = settings.mongoose
//var projectModel = require('../models/projects')

//var projectsSchema = projectModel.projects.schema



var usersSchema = mongoose.Schema({
    userId: {type: Number, required: [true, 'User Id is a mandatory field']},
    fname: {type: String},
    lname: {type: String},
    status: {type: String, enum: ['Invited','Active','Locked']},
    email: {type: String},
    projectId: [{type: Number, ref: 'projects'}],
    creationDate: {type: Date},
    modificationDate: {type: Date}
});

exports.Users = mongoose.model('users', usersSchema)
