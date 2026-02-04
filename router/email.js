
module.exports = function(app, client){
    let currPath = "/email";

    // Get URLs
    // URL: /user/api/v1/send_email
    app.post(currPath + "/send_email", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/email/send_email.js");
        // require("../src/email/send_email")
        urlLogicOBJ.main(req, res, client);
        
    });
}
