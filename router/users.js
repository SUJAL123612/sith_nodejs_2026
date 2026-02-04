
module.exports = function(app, client){
    let currPath = "/users";

    // Get URLs
    // URL: /user/api/v1/create_user
    app.post(currPath + "/create_user", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/users/create_user.js");
        // require("../src/users/get_user")
        urlLogicOBJ.main(req, res, client);
        
    });


    // Get URLs
    // URL: /user/api/v1/get_user/:id/
    app.get(currPath + "/get_user/:id/", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/users/get_user.js");
        // require("../src/users/get_user")
        urlLogicOBJ.main(req, res, client);
        
    });

    // Get URLs
    // URL: /user/api/v1/get_user_list
    app.get(currPath + "/get_user_list/", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/users/get_user_list.js");
        // require("../src/users/get_user_list")
        urlLogicOBJ.main(req, res, client);
        
    });

    // Get URLs
    // URL: /user/api/v1/update_user
    app.put(currPath + "/update_user/", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/users/update_user.js");
        // require("../src/users/update_user")
        urlLogicOBJ.main(req, res, client);
        
    });

    // Get URLs
    // URL: /user/api/v1/delete_user/:id
    app.delete(currPath + "/delete_user/:id/", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/users/delete_user.js");
        // require("../src/users/delete_user/:id")
        urlLogicOBJ.main(req, res, client);
        
    });
}