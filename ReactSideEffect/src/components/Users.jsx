// useEffect
import { useEffect, useState } from "react"

function Users() {
    const [users, setUsers] = useState([]);

  useEffect( () => {
    async function fetchUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await response.json();
        setUsers(json);
    }
    fetchUsers();
  }, []);

  return (
    <div>
        {!users.length && <h3>loading...</h3>}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users
