// useEffect
import { useEffect, useState } from "react"

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [id, setId] = useState("");

  useEffect( () => {
    async function fetchUsers() {
        try {
        const response = await fetch(`htTps://jsonplaceholder.typicode.com/users/${id}`)
        const json = await response.json();
        setUsers(json);
        console.log(json)
    } catch(error) {
        setError(true);
    }
    }
    fetchUsers();
  }, [id]);
  // top line in [] when need updating we write the updated state.

  return (
    <div>
        <input  type="text"
                placeholder="enter id"
                value={id}
                onChange={event => setId(event.target.value)}/>
        {!users.length && !error && <h3>loading...</h3>}
        {/* <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul> */}
        {error && <>Something went wrong!</>}
    </div>
  )
}

export default Users
