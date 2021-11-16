import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import styles from './App.module.scss';

function App() {
	const [getData, setGetData] = useState([]);
	const [urlType, setUrlType] = useState('posts');

	function handleClick(type) {
		setUrlType(type);
	}

	useEffect(() => {
		const url = `http://localhost:3001/${urlType}`;
		fetch(url)
			.then((data) => data.json())
			.then((dataResponse) => setGetData(dataResponse))
			.catch((error) => alert(error));
	}, [urlType]);

	return (
		<div className={styles.app}>
			<div>
				<Button primary onClick={handleClick}>
					posts
				</Button>
				<Button secondary onClick={handleClick}>
					todos
				</Button>
				<Button tertiary onClick={handleClick}>
					users
				</Button>
			</div>
			<div className={styles.list}>
				<ul>
					{getData.map((data) => (
						<li key={data.id}>{data.title || data.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
