function main(req, res, client){
    const fs = require('fs');
    // fs.writeFileSync("write_data_stream.txt", "hello World, i am sanket");
    
    temp_data = "Sujal Chalke";
    for(i=0;i<5; i++)
    {
        temp_data += temp_data;
        console.log(i);
    }
    fs.writeFileSync("write_data_stream.txt", temp_data);
    res.send("Write data successfully");
}

module.exports={
    main : main
}