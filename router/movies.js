
module.exports = function(app, client){
    let currPath = "/movies";

    // POST URLs
    // URL: /movies/api/v1/create_movie
    app.post(currPath + "/create_movie", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/movies/create_movie.js");
        // require("../src/movies/create_movie")
        urlLogicOBJ.main(req, res, client);
        
    });
}