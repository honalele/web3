import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [listOfUsers, setListOfUsers] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/getUsers")
			.then(function (response) {
				// handle success
				setListOfUsers(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}, []);

	const createUser = () => {
		axios
			.post("http://localhost:3001/createUser", {
				name: "name",
				age: 37,
				username: "username",
			})
			.then(function (response) {
				alert("ユーザー新規登録された");
			});
	};

	return (
		<div className="App">
			<div className="userDisplay">
				{listOfUsers.map((user) => {
					return (
						<div>
							<h1>Name : {user.name}</h1>
							<h2>Age : {user.age}</h2>
							<h3>Username : {user.username}</h3>
						</div>
					);
				})}
			</div>

			<div>
				<input type="text" placeholder="Name..." />
				<input type="number" placeholder="Age..." />
				<input type="text" placeholder="Username..." />
				<button onClick={createUser}>新規登録</button>
			</div>
		</div>
	);
}

export default App;
