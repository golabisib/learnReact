import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
query {
    users {
      data {
        name,
        email,
        phone,
        todos {
          data {
            title,
            completed,
          }
        }
      }
    }
  }
`;

function Users() {
	const { loading, data, error } = useQuery(GET_USERS);
	console.log(loading, data, error);

	if (loading) return <h3>Loading...</h3>;
	return (
		<div>
			{data.users.data.map((user) => (
				<div key={user.id}>
					<h2>{user.name}</h2>
					<h3>{user.email}</h3>
					<p>{user.phone}</p>
				</div>
			))}
		</div>
	);
}

export default Users;
