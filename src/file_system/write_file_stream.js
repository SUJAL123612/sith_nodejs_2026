function main(req, res, client){
    const fs = require('fs');
    // x = fs.createReadStream("write_data_stream.txt");
    // y = fs.createWriteStream("output.txt");
    // x.pipe(y);
    x = fs.createReadStream(req.body.input_file);
    y = fs.createWriteStream(req.body.output_file);
    x.pipe(y);
    console.log(req.body.output_file);
    res.send("write data successfully");
}


module.exports={
    main : main
}