/**
 * Created by pavithraabhishek on 2/20/17.
 */

var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var router = new express.Router();
require('./api/v1/projects')(router);
require('./api/v1/workpackage')(router);
require('./api/v1/users')(router);

app.use(router);

// projects = require('./routes/projects');
//
// app.get('/projects', projects.findAll);
// app.get('/projects/:id', projects.findById)
// app.post('/projects', projects.addProject)
// app.put('/projects/:id', projects.updateProject)
//
//
//
// var project = {
//     "project4" : {
//         "id": 4,
//         "name": "Project4",
//         "description": "This is the project description for P4  ",
//         "members": [
//             {"id": 1, "name": "User1"}, {"id": 2, "name": "User2"}, {"id": 3, "name": "User3"}
//         ],
//         "workpackage": [
//             {"id": 1, "name": "WP1", "description": "WP1 description", "type": "Task"},
//             {"id": 2, "name": "WP2", "description": "WP2 description", "type": "Bug"},
//             {"id": 3, "name": "WP3", "description": "WP3 description", "type": "Epic"}
//         ]
//     }
// }




app.listen(3000);
console.log('Listening on port 3000...');