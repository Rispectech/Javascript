const express = require('express')
const mongodb = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const db = require("../config/db")
const app = express();

app.use(express.urlencoded({ extended: true }))

mongodb.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app,database);
    app.listen(5000, () => {
        console.log("Server is listening on port 5000.....");
    })

})