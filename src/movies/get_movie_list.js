function main(req, res, client) {
  client.dbInstance
    .collection("movies")
    .find({})
    .toArray()
    .then((data) => {
      if (!data) {
        const response_obj = {
          suceess: false,
          data: null,
          err: "Movies not found",
          err_id: "100007",
        };
        res.status(400).send(response_obj);
        return;
      }
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
        err_id: "400",
      };
      res.status(400).send(response_obj);
    });
}

module.exports = {
  main: main,
};
