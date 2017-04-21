/**
 * Created by pavithraabhishek on 4/19/17.
 */


var model = require('../models/workpackagestage')





exports.select = function (criteria, callback) {

    model.workpackagestages.find(criteria, function (err, data) {
        callback(err, data);
    })

}

