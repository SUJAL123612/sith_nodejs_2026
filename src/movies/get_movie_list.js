function main(req, res, client) {
  client.dbInstance
    .collection("movies")
    .find({}).toArray()
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Movie not found" });
        return;
      }
      res.json(data);
      return;
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
      return;
    });
}

module.exports = {
  main: main,
};
