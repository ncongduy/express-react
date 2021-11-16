// import resourse
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

// setup server
const app = express();
app.use(cors());
// to use json
app.use(express.json());
// to use url encoded values
app.use(express.urlencoded({ extended: true }));

async function getData() {
	try {
		const types = ['posts', 'todos', 'users'];
		const url = `https://jsonplaceholder.typicode.com/`;
		const urlArray = types.map((type) => url + type);

		const getPostsData = await fetch(urlArray[0]);
		const postsData = await getPostsData.json();

		const getTodosData = await fetch(urlArray[1]);
		const todosData = await getTodosData.json();

		const getUsersData = await fetch(urlArray[2]);
		const usersData = await getUsersData.json();

		return {
			postsData,
			todosData,
			usersData,
		};
	} catch (error) {
		console.log(error);
	}
}

// routing
app.get('/', function (req, res) {
	res.send({ hello: 'hello world from express!' });
});

app.get('/posts', function (req, res) {
	getData().then((data) => res.send(data.postsData));
});

app.get('/todos', function (req, res) {
	getData().then((data) => res.send(data.todosData));
});

app.get('/users', function (req, res) {
	getData().then((data) => res.send(data.usersData));
});

// run server at port 3001
const port = process.env.PORT || 3001;
app.listen(port, function () {
	console.log(`App listening on port: ${port}`);
});
