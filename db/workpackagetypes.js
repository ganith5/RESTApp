/**
 * Created by pavithraabhishek on 4/19/17.
 */


/**
 * Created by pavithraabhishek on 3/27/17.
 */

var model = require("../models/workpackagetypes")


exports.select = function (criteria, callback) {

    model.workpackagetypes.find(criteria, function (err, data) {
        callback(err, data);
    })

}

