
module.exports = function(app, client){
    let currPath = "/movies";

    // POST URLs
    // URL: /movies/api/v1/create_movie
    app.post(currPath + "/create_movie", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/movies/create_movie.js");
        // require("../src/movies/create_movie")
        urlLogicOBJ.main(req, res, client);
        
    });

    // GET URLs
      // URL: /movies/api/v1/get_movie/:id
      app.get(currPath + "/get_movie/:id", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/movies/get_movie.js");
        // require("../src/movies/get_movie")
        urlLogicOBJ.main(req, res, client);
        
    });

    // URL: /movies/api/v1/get_movie_list
    app.get(currPath + "/get_movie_list", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/movies/get_movie_list.js");
        // require("../src/movies/get_movie_list")
        urlLogicOBJ.main(req, res, client);
        
    });

      // Put URLs
    // URL: /movies/api/v1/update_movie
    app.put(currPath + "/update_movie", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/movies/update_movie.js");
        // require("../src/movies/update_movie")
        urlLogicOBJ.main(req, res, client);
        
    });

       // delete URLs
    // URL: /movies/api/v1/delete_movie/:id
    app.delete(currPath + "/delete_movie/:id", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/movies/delete_movie.js");
        // require("../src/movies/delete_movie")
        urlLogicOBJ.main(req, res, client);
        
    });
}