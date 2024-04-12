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
