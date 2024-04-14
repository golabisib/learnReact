// useEffect
import { useEffect, useState } from "react"

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

  useEffect( () => {
    async function fetchUsers() {
        try {
        const response = await fetch("htps://jsonplaceholder.typicode.com/users")
        const json = await response.json();
        setUsers(json);
    } catch(error) {
        setError(true);
    }
    }
    fetchUsers();
  }, []);

  return (
    <div>
        {!users.length && !error && <h3>loading...</h3>}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        {error && <>Something went wrong!</>}
    </div>
  )
}

export default Users
