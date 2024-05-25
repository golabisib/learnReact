import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { GET_USER } from "../graphql/queries";

function UserOnClick() {
	const [id, setId] = useState("");

	const changeHandler = (e) => {
		setId(e.target.value);
	};

	const [getUser, { loading, data, error, called }] = useLazyQuery(GET_USER, {
		variables: { id: id },
	});

	console.log({ loading, data, error, called });



	return (
		<div>
			<h2>UserOnClick</h2>
			<input
				type="text"
				value={id}
				onChange={changeHandler}
				placeholder="Enter ID"
			/>
			<button
				type="button"
				onClick={() => {
					getUser()
				}}
			>
				Get User
			</button>
            {loading && <h3>Loading...</h3>}
            {error && <h3>Something went wrong.</h3>}
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

export default UserOnClick;
