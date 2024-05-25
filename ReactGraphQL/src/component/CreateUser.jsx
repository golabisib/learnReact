import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutation";
import { useState } from "react";

function CreateUser() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const [createUser, { loading, data, error, called }] = useMutation(
		CREATE_USER,
		{
			variables: {
				name: name,
				username: username,
				email: email,
				phone: phone,
			},
		},
	);
	console.log({ loading, data, error, called });
	return (
		<div>
			<input
				type="text"
				value={name}
				placeholder="Enter Name"
				onChange={(e) => setName(e.target.value)}
			/>

			<input
				type="text"
				value={username}
				placeholder="Enter Username"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="text"
				value={email}
				placeholder="Enter Email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="text"
				value={phone}
				placeholder="Enter Phone"
				onChange={(e) => setPhone(e.target.value)}
			/>

			<button type="button" onClick={() => createUser()}>
				Create User
			</button>
		</div>
	);
}

export default CreateUser;
