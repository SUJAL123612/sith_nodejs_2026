function main(req, res, client) {

    let { id, first_name, email} = req.body;

    if(id == "" || id == null || id == 0)
    {
        const response_obj = {
            "suceess": true,
            "data": {
                msg : "Id required !!"
            },
            "err": null,
            "err_id": null
        }
        res.status(200).send(response_obj);
        return;
    }

    const selectQuery = `Select mobile from users where id = $1;`;

    client.query(selectQuery, [id], (err, data) => {
        if (err) {
            console.log(err);
            const response_obj = {
                "suceess": false,
                "data": null,
                "err": err,
                "err_id": "100021"
            }
            res.status(400).send(response_obj);
            return;
        }


        let user_name = first_name.toLowerCase().trim() + "@" + data.rows[0].mobile.trim();
        let password = first_name.trim() + "@123";
        // console.log(user_name);


        let updateQuery = `UPDATE users SET user_name = $1, email = $2, password=$3, updated_at = NOW() WHERE id = $4 Returning user_name, email;`;
        let values = [user_name, email, password, id];

        client.query(updateQuery, values, (err, data) => {
            if (err) {
                console.log(err);
                const response_obj = {
                    "suceess": false,
                    "data": null,
                    "err": err,
                    "err_id": "100042"
                }
                res.status(400).send(response_obj);
                return;
            }
            console.log("Data Updated Successfully");
            console.log(data.rows[0]);
            const response_obj = {
                "suceess": true,
                "data": data.rows[0],
                "err": null
            }
            // res.status(200).send("Data Update Successfully");
            res.status(200).send(response_obj);
        });
    });
}

module.exports = {
    main: main
}