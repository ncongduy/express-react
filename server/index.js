// import resourse
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// setup server
const app = express();
app.use(cors());
// to use json
app.use(express.json());
// to use url encoded values
app.use(express.urlencoded({ extended: true }));

// routing
app.get('/', function (req, res) {
	res.send({ hello: 'hello world from express!' });
});

// run server at port 9000
const port = process.env.PORT || 3001;
app.listen(port, function () {
	console.log(`App listening on port: ${port}`);
});
