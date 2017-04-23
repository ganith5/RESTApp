/**
 * Created by pavithraabhishek on 4/22/17.
 */


var tokens = [];

module.exports = {
    add: function(token, payload) {
        console.log("Token = " + token + " Payload: " + JSON.stringify(payload))
        tokens[token] = payload
        console.log("Added token to store = " + JSON.stringify(tokens[token]));
    },



    isValid: function (token) {
        if (tokens[token] === undefined) return false;
        console.log("Token expiry  = " + tokens[token].exp);
        if(tokens[token].exp <= new Date()) {
            console.log("EXPIRED!!")
            var ndx = tokens.indexOf(token)
            console.log("Token index : " + ndx);
            tokens.splice(ndx, 1)
            return false
        } else {
            return true
        }
        
    }


}
