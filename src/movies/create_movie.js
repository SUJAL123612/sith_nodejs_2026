function main(req, res, client, appEnv) {
  console.log("create_movie", appEnv);
  client.dbInstance.collection("movies").insertOne(req.body)
    .then(() => {
      return client.dbInstance.collection("movies").findOne({ name: req.body.name });
    })
    .then((data) => {
      // const response_obj = {
      //   suceess: true,
      //   data: data,
      //   err: null,
      //   err_id: null,
      // };

      // res.status(200).send(response_obj);
      appEnv.responseGenerator.sendResponse(res, false, 200, data, null, null);
      return;
    })
    .catch((err) => {
      // const response_obj = {
      //   suceess: false,
      //   data: null,
      //   err: err.message,
      //   err_id: 1000017,
      // };

      // res.status(400).send(response_obj);
      appEnv.responseGenerator.sendResponse(res, true, 400, null, err, appEnv.getCurrentLine());
      return;
    });
}

module.exports = {
  main: main,
};
