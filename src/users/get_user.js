function main(req, res, client) {

    let id = req.params.id;
    let selectQuery = `select id, user_name, mobile, email, role from users where id= $1 and is_obsolete = 0;`;

    client.query(selectQuery, [id], (err, data) => {
        if (err) {
            console.log(err);
            const response_obj = {
                "suceess": false,
                "data": null,
                "err": err,
                "err_id": "100006"
            }
            res.status(400).send(response_obj);
            return;
        }
        const response_obj = {
            "suceess": true,
            "data": data.rows,
            "err": null,
            "err_id": null
        }
        res.status(200).send(response_obj);
        return;
    });
}


module.exports = {
    main: main
}