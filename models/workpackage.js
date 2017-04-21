/**
 * Created by pavithraabhishek on 3/25/17.
 */


var settings = require('../db/settings')
var usersModel = require('../models/users')
var mongoose = settings.mongoose




var workPackageSchema = mongoose.Schema({
    wid: {type: Number, required: [true, 'Workpackage id is mandatory']},
    assignee: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    subject: {type: String},
    type: {type: String, enum: ['Task', 'Milestone', 'Phase', 'Feature', 'Bug', 'Epic']},
    status: {type: String, enum: ['New', 'Scheduled', 'Developed', 'Specified', 'Confirmed', 'In Progress']},
    creationDate: {type: Date},
    modificationDate: {type: Date}
});

exports.workpackage = mongoose.model('workPackage', workPackageSchema);
