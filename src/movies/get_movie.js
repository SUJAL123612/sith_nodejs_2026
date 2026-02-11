const { ObjectId } = require('mongodb');

function main(req, res, client) {

    let id = req.params.id;

    if (id.length != 24) {
        res.status(400).json({ message: "Correct ID Required !!" });
        return;
    }
    client.dbInstance
        .collection('movies')
        .findOne({ _id: new ObjectId(id) })
        .then(data => {
            if (!data) {
                const response_obj = {
                    suceess: false,
                    data: null,
                    err: "Movie not found",
                    err_id: "100015"
                };
                res.status(400).send(response_obj);
                return;
            }
            const response_obj = {
                suceess: true,
                data: data,
                err: null,
                err_id: null
            };
            res.status(200).send(response_obj);
            return;
        })
        .catch(err => {
            const response_obj = {
                suceess: false,
                data: null,
                err: err.message,
                err_id: "400"
            };
            res.status(400).send(response_obj);
        });
}

module.exports = {
    main: main
};