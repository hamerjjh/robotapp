require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const RobotsController = require('./routes/RobotsController')


const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true});

const connection = mongoose.connection;
connection.on('connected', () => {
console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
console.log('Mongoose default connection error: ' + err);
});

//Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/build/'));
app.use('/api/robots', RobotsController)


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

// App Listening
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log("Magic happening on port " + PORT);
})