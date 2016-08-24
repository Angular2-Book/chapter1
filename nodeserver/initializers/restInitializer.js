//var domainService = require("../services/domainService");
//var userService = require("../services/userService");

exports.initialize = function (app) {    
    app.get('/rs/hello', function (req, res) {
        res.send({message: "Hello World"});
    });

};

