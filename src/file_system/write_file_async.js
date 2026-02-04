function main(req, res, client){
    const fs = require('fs');
    fs.writeFile("write_data_2.txt", "hello World, i am sanket......", (err, data)=>{
        console.log(err,data);
        res.send("Write data successfully");
    });
}

module.exports={
    main : main
}