import { useState } from "react";
import { UPDATE_USER } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function UpdateUser() {
	const [name, setName] = useState("");
	const [id, setId] = useState("");

	const [updateUser, { loading, data, error, called }] = useMutation(
		UPDATE_USER,
		{
			variables: {
				name: name,
				id: id,
			},
		},
	);
	console.log({ loading, data, error, called });
	return (
		<div>
			<input
				type="text"
				value={id}
				placeholder="Enter Id"
				onChange={(e) => setId(e.target.value)}
			/>

			<input
				type="text"
				value={name}
				placeholder="Enter Name"
				onChange={(e) => setName(e.target.value)}
			/>

			<button type="button" onClick={() => updateUser()}>
				Update User
			</button>
		</div>
	);
}

export default UpdateUser;
