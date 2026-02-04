function main(req, res, client) {
  //  client.connect((err) => {
  //     if (err) {
  //         console.log(err);
  //         res.status(400).send("Error while connecting to the database");
  //         return;
  //     }

  let { first_name, mobile, email, role } = req.body;

  client.query(
    `SELECT user_name from users WHERE mobile = $1;`,
    [mobile.trim()],
    (err, data) => {
      if (err) {
        console.log(err);
        const response_obj = {
          suceess: false,
          data: null,
          err: err,
          err_id: "1000011",
        };
        res.status(400).send(response_obj);
        return;
      }

      if (data.rows.length != 0) {
        const response_obj = {
          suceess: true,
          data: {
            msg: "User Already Exists. !!",
          },
          err: err,
          err_id: null,
        };
        res.status(200).send(response_obj);
        return;
      }

      const insertQuery = `
      INSERT INTO users (user_name, mobile, email, role, password)
      VALUES ($1, $2, $3, $4, $5) Returning id, user_name, mobile, email, role;
    `;

      let user_name = first_name.trim() + "@" + mobile.trim();
      let password = first_name.trim() + "@123";
      let values = [user_name, mobile.trim(), email.trim(), role, password];

      client.query(insertQuery, values, (err, data) => {
        if (err) {
          console.log(err);
          const response_obj = {
            suceess: false,
            data: null,
            err: err,
            err_id: "1000049",
          };
          res.status(400).send(response_obj);
          return;
        }
        console.log("Data inserted successfully");
        const response_obj = {
          suceess: true,
          data: data.rows[0],
          err: err,
          err_id: null,
        };
        res.status(200).send(response_obj);
        return;
      });
    }
  );
}

module.exports = {
  main: main,
};
