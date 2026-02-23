function main(req, res, client, appEnv) {
console.log("get_user",appEnv);
    let id = req.params.id;
    let selectQuery = `select id, user_name, mobile, email, role from users where id= $1 and is_obsolete = 0;`;

    client.query(selectQuery, [id], (err, data) => {
        if (err) {
            console.log(err);
            // const response_obj = {
            //     "suceess": false,
            //     "data": null,
            //     "err": err,
            //     "err_id": "100006"
            // }
            // res.status(400).send(response_obj);
            appEnv.responseGenerator.sendResponse(res, true, 400, null, err, appEnv.getCurrentLine());
            return;
        }
        // const response_obj = {
        //     "suceess": true,
        //     "data": data.rows,
        //     "err": null,
        //     "err_id": null
        // }
        // res.status(200).send(response_obj);
        appEnv.responseGenerator.sendResponse(res, false, 200, null, null);
        return;
    });
}


module.exports = {
    main: main
}