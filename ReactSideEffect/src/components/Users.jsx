// useEffect
import { useEffect, useState } from "react"

function Users() {
    const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => setUsers(json));

  }, []);

  return (
    <div>
        <ul>
            {users.map((user) => (
             <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users
