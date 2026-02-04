function main(req, res, client){
    const fs = require('fs');
    // var dataLen;
    var dataLen = 0;
    readStream = fs.createReadStream("write_data_stream.txt");

    readStream.on("data", (chunk)=>{
        dataLen += chunk.length;
        console.log(dataLen);
        console.log(chunk);
    });
    readStream.on("end", ()=>{
        console.log("Reading data completed");
    });
    readStream.on("error", (err)=>{
        console.log(err);
    });
    readStream.on("close", ()=>{
        console.log("Data vanished From Memory");
    });

    res.send("Read data successfully");
}

module.exports={
    main : main
}