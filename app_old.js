console.log("Hello Buddy");
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/query/', (req, res) => {
  res.send(req.query.name)
})

app.get('/param/:id/:name/:depart', (req, res) => {
  res.send(req.params)
})


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.get('/body/', (req, res) => {
  res.send(req.body)
})

// const { Client } = require("pg");

// const client = new Client({
//   user: 'postgres',
//   password: 'root',
//   host: 'localhost',
//   port: 5432,
//   database: 'sujal_nodejs',
// });

const client = require('./config/postgres');

app.post('/users/create_user', (req, res) => {
  var file = require('./src/users/create_user.js');
  file.main(req, res, client);
})

app.get('/users/get_user/:id', (req, res) => {
  var file = require('./src/users/get_user.js');
  file.main(req, res, client);
})

app.get('/users/get_user_list', (req, res) => {
  var file = require('./src/users/get_user_list.js');
  file.main(req, res, client);
})

app.put('/users/update_user', (req, res) => {
  var file = require('./src/users/update_user.js');
  file.main(req, res, client);
})
app.delete('/users/delete_user/:id', (req, res) => {
  var file = require('./src/users/delete_user.js');
  file.main(req, res, client);
})
// client.connect((err) => {
//   if (err) {
//     console.error("Connection error:", err.stack);
//   } else {
//     console.log("Database connected successfully..");
//   }
// });


//**FILE_SYSTEM**

app.post('/file_system/write_file', (req, res) => {
  var file = require('./src/file_system/write_file.js');
  file.main(req, res, client);
})
app.post('/file_system/write_file_async', (req, res) => {
  var file = require('./src/file_system/write_file_async.js');
  file.main(req, res, client);
})
app.post('/email/send_email', (req, res) => {
  var file = require('./src/email/send_email.js');
  file.main(req, res, client);
})

app.listen(9998, () => {
    console.log(`Server is running on port 9998`)
  })
