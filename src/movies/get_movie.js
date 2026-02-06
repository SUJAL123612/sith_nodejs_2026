const { ObjectId } = require('mongodb');

function main(req, res, client) {

    let id = req.params.id;
    if(id.length != 24)
  {
    res.json({ message: "Correct ID Required !!" });
  }
    
    client.dbInstance
        .collection('movies')
        .findOne({ _id: new ObjectId(id) })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: "Movie not found" });
                return;
            }
            res.json(data);
            return;
        })
        .catch(err => {
            res.status(400).json({ error: err.message });
            return;
        });
};

module.exports = {
    main: main
}