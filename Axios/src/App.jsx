import { useEffect, useState } from "react";

import axios from "axios";
import Post from "./components/Post";
import Delete from "./components/Delete";
import Put from "./components/Put";
import api from "./services/config";

function App() {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		api.get("/todos").then((res) => console.log(res));

		// axios
		// .get("https://jsonplaceholder.typicode.com/todos")
		// .then( (res) => setTodos(res.data));
		// axios
		// 	.all([
		// 		axios.get("https://jsonplaceholder.typicode.com/todos"),
		// 		axios.get("https://jsonplaceholder.typicode.com/posts"),
		// 		axios.get("https://jsonplaceholder.typicode.com/users"),
		// 	])
		// 	.then(
		// 		axios.spread((todos, posts, users) => {
		// 			console.log(todos, posts, users);
		// 		}),
		// 	);
	}, []);

	return (
		<>
			<h1>Axios Season</h1>
			{/* <ul>
        {todos.map( (todo) => (
            <li key={todo.id}>{todo.title}</li>
        ))}
    </ul> */}
			<Post />
			{/* <Delete /> */}
			{/* <Put /> */}
		</>
	);
}
//178

export default App;
