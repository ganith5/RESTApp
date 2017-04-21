/**
 * Created by pavithraabhishek on 4/19/17.
 */


var settings = require('../db/settings')
var mongoose = settings.mongoose




var workPackageTypeSchema = mongoose.Schema({
    key: {type: String},
    value: {type: String}
});

exports.workpackagetypes = mongoose.model('workpackagetypes', workPackageTypeSchema);

