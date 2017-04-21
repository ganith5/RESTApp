/**
 * Created by pavithraabhishek on 4/18/17.
 */


exports.create = function(error, httpMethod, statusCode, endPointInformation) {
    var message = error.message;
    var name = error.name;

    return {
        endPointInformation: endPointInformation,
        httpMethod: httpMethod,
        status: statusCode,
        message: message,
        name: name
    }
}
