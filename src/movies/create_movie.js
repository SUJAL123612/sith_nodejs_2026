function main(req, res, client){
    client.dbInstance.collection('movies').insertOne(req.body);
    res.send("create movie sucessfully");
}

module.exports={
    main : main
}