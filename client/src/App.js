import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [getData, setGetData] = useState({});

	useEffect(() => {
		const url = 'http://localhost:3001/';
		fetch(url)
			.then((data) => data.json())
			.then((dataResponse) => {
				console.log(dataResponse);
				return setGetData(dataResponse);
			})
			.catch((error) => alert(error));
	}, []);

	return <div className='App'>{getData.hello}</div>;
}

export default App;
