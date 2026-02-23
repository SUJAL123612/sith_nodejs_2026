const { ObjectId } = require("mongodb");

function main(req, res, client, appEnv) {
console.log("Delete_movie",appEnv);
  let id = req.params.id;

  if (id.length != 24) {
    // res.status(400).json({ message: "Correct ID Required !!" });
    appEnv.responseGenerator.sendResponse(res, true, 400, null, { msg: "Correct ID Required !!" }, appEnv.getCurrentLine());
    return; 
  }
  client.dbInstance
    .collection("movies")
    .deleteOne({ _id: new ObjectId(id) })
    .then((data) => {
      if (data.deletedCount === 0) {
        // const response_obj = {
        //   suceess: false,
        //   data: null,
        //   err: "Movie not deleted",
        //   err_id: "100015",
        // };
        // res.status(400).send(response_obj);
        appEnv.responseGenerator.sendResponse(res, true, 400, null, { msg: "Movie not deleted" }, appEnv.getCurrentLine());
        return;
      }
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
      //   err_id: "400",
      // };
      // res.status(400).send(response_obj);
      appEnv.responseGenerator.sendResponse(res, true, 400, null, err, appEnv.getCurrentLine());
    });
}

module.exports = {
  main: main,
};