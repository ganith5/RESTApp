/**
 * Created by pavithraabhishek on 3/25/17.
 */

var settings = require('../db/settings');
var mongoose = settings.mongoose



var usersSchema = mongoose.Schema({
    userId: {type: Number},
    fname: {type: String},
    lname: {type: String},
    status: {type: String, enum: ['Invited','Active','Locked']},
    email: {type: String},
    creationDate: {type: Date},
    modificationDate: {type: Date}
});

exports.Users = mongoose.model('users', usersSchema)
