function main(req, res, client, appEnv){
    console.log("Append_File_Async",appEnv);
    const fs = require('fs');
    fs.appendFile("dwrite_data_2.txt", "hello World, this is sanket......",(err,data)=>{
        console.log(err,data);
        fs.rename("dwrite_data_2.txt","ddasync_file_test.txt",(err,data2)=>{
            console.log(err,data2);
            // res.send("append data successfully");
            appEnv.responseGenerator.sendResponse(res, false, 200, {msg : "Append Data Successfully" }, null, null);
            return;
        });
    });
}

module.exports={
    main : main
}