function main(req, res, client, appEnv){
    console.log("Append_file",appEnv);
    const fs = require('fs');
    fs.appendFileSync("write_data_2.txt", "hello World, this is sanket......");
    fs.renameSync("write_data_2.txt","test_file.txt");
    // res.send("append data successfully");
    appEnv.responseGenerator.sendResponse(res, false, 200, { msg: "append data successfullly"}, null, null);
    return;
}

module.exports={
    main : main
}