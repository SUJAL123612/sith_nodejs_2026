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
require('./router')(app);

// const { MongoClient, ObjectId } = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const dbName = "employee";

// const db = client.db(dbName);
// // //create a collection in mongo
// const col_2 = db.collection("collection_2");

// col_2.insertOne({
//   name : "sujal",
//   dept : "CS"
// })
// col_2.insertMany([{name : "Raj", dept : "IT"}, {name:"Aditya", dept : "Commerce"}])

// col_2.find({
//   dept:"IT"
// })


app.listen(9998, () => {
    console.log(`Server is running on port 9998`)
  })
