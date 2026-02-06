const { ObjectId } = require("mongodb");

function main(req, res, client) {

  let id = req.params.id;

  if(id.length != 24)
  {
    res.json({ message: "Correct ID Required !!" });
  }

  client.dbInstance
    .collection("movies")
    .deleteOne({ _id: new ObjectId(id) });

  res.json({ message: "Movie deleted successfully" });
}

module.exports = {
  main: main,
};
