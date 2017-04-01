var fs = require('fs');
// var bodyParser = require('body-parser');
// app.use(bodyParser.text());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

exports.findAll = function(req, res) {
   // res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
    fs.readFile('projects/projects.json', 'utf-8', function (err, data) {
        console.log("Displaying from QUERY method : " + data);
        res.send( data );
    })
};

exports.findById = function(req, res) {
    //res.send({id:req.params.id, name: "The Name", description: "description"});

    fs.readFile('projects/projects.json', 'utf-8', function (err, data) {
        data = JSON.parse(data);
        var retProject;
        for(var i=0; i< data.length; i++) {
            if(data[i].id == req.params.id) {
                retProject  = data[i];

            }

        }

        //TODO: select by equating id
        console.log("Displaying from GET Project["+req.params.id+"] " + JSON.stringify(retProject));
        res.send(JSON.stringify(retProject));
    });
};


/**
 * Creating a project
 */
exports.addProject = function(req, res) {
    console.log("Adding project");
    fs.readFile('projects/projects.json', 'utf-8', function (err, data) {
        data = JSON.parse(data);
        data.push(req.body);
        res.send(JSON.stringify(req.body));
    });
}

/**
 * Updating project
 */

exports.updateProject = function(req, res) {
    console.log("Updating project");
    fs.readFile('projects/projects.json', 'utf-8', function(err, data) {
       data = JSON.parse(data);
        for(var i=0; i< data.length; i++) {
            if(data[i].id == req.params.id) {
                console.log("Updating project workpackage = " + req.body.workpackage);
                data[i] = req.body;

            }

        }
        res.send(JSON.stringify(req.body));

    });
}