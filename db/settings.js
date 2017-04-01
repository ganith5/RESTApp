/**
 * Created by pavithraabhishek on 3/25/17.
 */


var mongoose = require('mongoose');

var uri = process.env.DB_URI
var options = {user: process.env.DB_USER, pass: process.env.DB_PASSWORD}


mongoose.connect(uri, options)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error'));

db.on('open', function() {
    console.log("Mongoose connected");
})

db.on('disconnected', function(){
    console.log('Mongoose disconnected')
})

exports.mongoose = mongoose;
exports.db = mongoose.connection;




