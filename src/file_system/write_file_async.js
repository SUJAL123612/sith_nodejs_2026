function main(req, res, client, appEnv){
    console.log("Write_File_Async",appEnv);
    const fs = require('fs');
    fs.writeFile("write_data_2.txt", "hello World, i am sanket......", (err, data)=>{
        console.log(err,data);
        // res.send("Write data successfully");
        appEnv.responseGenerator.sendResponse(res, false, 200, { msg : "Write Data Successfully" }, null, null);
        return;
    });
}

module.exports={
    main : main
}