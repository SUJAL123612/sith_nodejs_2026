
module.exports = function(app, client){
    let currPath = "/file_system";


    const multer = require('multer');
	const fs = require('fs');
	const path = require('path');

    //Creates uploads folder
	const dir = './uploads';
	if (!fs.existsSync(dir)) {
  		fs.mkdirSync(dir);
	}

	// Configure Multer storage
	const storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, 'uploads/'); // store files in documents folder
		},
		filename: function (req, file, cb) {
			// Generate unique filename
			const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
			const ext = path.extname(file.originalname);
			cb(null, file.fieldname + '-' + uniqueSuffix + ext);
		}
	});

	const upload = multer({ storage: storage });

    // Post URLs

    // URL: /user/api/v1/write_file
    app.post(currPath + "/write_file", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/file_system/write_file.js");
        // require("../src/file_system/write_file")
        urlLogicOBJ.main(req, res, client);
        
    });

    // URL: /user/api/v1/write_file_async
    app.post(currPath + "/write_file_async", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/file_system/write_file_async.js");
        // require("../src/file_system/write_file_async)
        urlLogicOBJ.main(req, res, client);
        
    });

     // URL: /user/api/v1/write_file_stream
     app.post(currPath + "/write_file_stream", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/file_system/write_file_stream.js");
        // require("../src/file_system/write_file_stream)
        urlLogicOBJ.main(req, res, client);
        
    });    
    
    //upload.array for multiple uploads
    //upload.single for single uploads
    // URL: /file_system/upload_document/
	app.post(currPath + "/upload_document/", upload.single('file'), function (req, res) {
		let urlLogicOBJ = require(__dirname + "/../src/file_system/upload_document.js");//file path
		urlLogicOBJ.main(req, res, client);
	});
    
    // Get URLs

    // URL: /user/api/v1/read_file
    app.get(currPath + "/read_file", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/file_system/read_file.js");
        // require("../src/file_system/read_file)
        urlLogicOBJ.main(req, res, client);       
    });

    // URL: /user/api/v1/read_file_async
    app.get(currPath + "/read_file_async", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/file_system/read_file_async.js");
        // require("../src/file_system/read_file_async)
        urlLogicOBJ.main(req, res, client);       
    });

    // URL: /user/api/v1/read_file_stream
    app.get(currPath + "/read_file_stream", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/file_system/read_file_stream.js");
        // require("../src/file_system/read_file_stream)
        urlLogicOBJ.main(req, res, client);
        
    });

    // Put URLs
    
    // URL: /user/api/v1/append_file
    app.put(currPath + "/append_file", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/file_system/append_file.js");
        // require("../src/file_system/append_file)
        urlLogicOBJ.main(req, res, client);
        
    });

    // URL: /user/api/v1/append_file_async
    app.put(currPath + "/append_file_async", function(req,res){

        let urlLogicOBJ = require(__dirname + "/../src/file_system/append_file_async.js");
        // require("../src/file_system/append_file_async)
        urlLogicOBJ.main(req, res, client);
        
    });

}