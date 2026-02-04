function main(req, res, client){
    console.log('Uploaded file info:', req.file);
    res.send('Document uploaded!');
}

module.exports ={
    main: main
}