function main(req, res, client){
    const fs = require('fs');
    fs.appendFileSync("write_data_2.txt", "hello World, this is sanket......");
    fs.renameSync("write_data_2.txt","test_file.txt");
    res.send("append data successfully");
}

module.exports={
    main : main
}