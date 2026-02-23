
module.exports = function(app, client, appEnv){
    console.log("Guide route",appEnv);
    let currPath = "/guide";

    // GET URLs
    // URL: /guide/api/v1/get_event_emitters
    app.get(currPath + "/get_event_emitters", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/guide/get_event_emitters.js");
        // require("../src/guide/get_event_emitters")
        urlLogicOBJ.main(req, res, client, appEnv);
        
    });    
        
}