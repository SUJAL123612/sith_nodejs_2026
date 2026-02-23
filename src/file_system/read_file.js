function main(req, res, client, appEnv){
    console.log("Read_File",appEnv);
    const fs = require('fs');
    // var readData = fs.readFileSync("write_data.txt",{encoding:'utf8'});
    var readData = fs.readFileSync("ddasync_file_test.txt");
    //another way to read data in console in string format
    console.log(String(readData));
    // res.send("read data successfully");
    appEnv.responseGenerator.sendResponse(res, false, 200, { msg : "Read Data Successfully", data : String(readData)}, null, null);
    // res.send(readData);
}

module.exports={
    main : main
}