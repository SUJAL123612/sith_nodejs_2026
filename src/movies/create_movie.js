function main(req, res, client) {
  client.dbInstance.collection("movies").insertOne(req.body)
    .then(() => {
      return client.dbInstance.collection("movies").findOne({ name: req.body.name });
    })
    .then((data) => {
      const response_obj = {
        suceess: true,
        data: data,
        err: null,
        err_id: null,
      };

      res.status(200).send(response_obj);
      return;
    })
    .catch((err) => {
      const response_obj = {
        suceess: false,
        data: null,
        err: err.message,
        err_id: 1000017,
      };

      res.status(400).send(response_obj);
      return;
    });
}

module.exports = {
  main: main,
};
