/**
 * Created by pavithraabhishek on 3/25/17.
 */


var settings = require('../db/settings')
var model = require('../models/users')
var mongoose = settings.mongoose



var usersSchema = model.Users.schema;


var workPackageSchema = mongoose.Schema({
    wid: {type: Number},
    assignee: [usersSchema],
    subject: {type: String},
    type: {type: String, enum: ['Task', 'Milestone', 'Phase', 'Feature', 'Bug']},
    status: {type: String, enum: ['New', 'Scheduled', 'Developed', 'Specified', 'Confirmed', 'In Progress']},
    creationDate: {type: Date},
    modificationDate: {type: Date}
});

exports.workpackage = mongoose.model('workPackage', workPackageSchema);
