import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_USER } from "../graphql/queries";

function User() {
	const [id, setId] = useState("");

	const changeHandler = (e) => {
		setId(e.target.value);
	};

	const { loading, data, error } = useQuery(GET_USER, {
		variables: { id: id },
	});

	console.log({ loading, data, error });

	return (
		<div>
			<h2>User</h2>
			<input
				type="text"
				value={id}
				onChange={changeHandler}
				placeholder="Enter ID"
			/>
			{data && (
				<>
					<h1>{data.user.name}</h1>
					<h3>{data.user.email}</h3>
					<h3>{data.user.phone}</h3>
				</>
			)}
		</div>
	);
}

export default User;
