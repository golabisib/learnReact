import { useState } from "react";
import { DELETE_USER } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

function DeleteUse() {
	const [id, setId] = useState("");

	const [deleteUser, { loading, data, error }] = useMutation(DELETE_USER, {
		variables: { id: id },
	});
    console.log({ loading, data, error })
	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			<button type="button" onClick={() => deleteUser()}>
				Delete Item
			</button>
		</div>
	);
}

export default DeleteUse;
