
function main(req, res, client) {

  
    client.dbInstance.collection('movies').updateOne({name:"Harry Potter and the Order of the Phoenix"}, {$set: {name: "neeraj"}});
    res.json({"message": "Update data successfully"});    
}

module.exports = {
    main: main
}