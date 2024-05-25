import { useQuery , gql} from "@apollo/client";
import { useState } from "react";

const GET_USER = gql`
    query getUser($id: ID!) {
        user(id: $id) {
            id,
            name,
            email,
            phone
        }
    }
`;

function User() {
	const [id, setId] = useState("");

	const changeHandler = (e) => {
		setId(e.target.value);
	};

	const { loading, data, error } = useQuery(GET_USER,{
        variables: {id: id}
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
		</div>
	);
}

export default User;
