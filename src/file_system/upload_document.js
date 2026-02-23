function main(req, res, client, appEnv){
    console.log("Upload",appEnv);
    console.log('Uploaded file info:', req.file);
    // res.send('Document uploaded!');
    appEnv.responseGenerator.sendResponse(res, false, 200, { msg : "Document Uploaded!" }, null, null);
    return;
}

module.exports ={
    main: main
}