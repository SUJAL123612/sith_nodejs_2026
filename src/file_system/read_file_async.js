function main(req, res, client, appEnv){
    console.log("Read_File_async",appEnv);
    const fs = require('fs');
    // var readData = fs.readFileSync("write_data.txt",{encoding:'utf8'});
    var readData = fs.readFile("write_data_2.txt",(err,data)=>{
        console.log(err,data);
        //another way to read data in console in string format
        console.log(String(data));
        // console.log(data.toString());
        // res.send("read data successfully");
        appEnv.responseGenerator.sendResponse(res, false, 200, { msg:"read data successfully" }, null, null);
        return;
    });
}

module.exports={
    main : main
}