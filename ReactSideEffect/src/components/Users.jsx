// useEffect
import { useEffect, useState } from "react"
import Counter from "./Counter";

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [id, setId] = useState("");

  useEffect( () => {
    async function fetchUsers() {
        try {
        const response = await fetch(`htTps://jsonplaceholder.typicode.com/users/`)
        const json = await response.json();
        setUsers(json);
    } catch(error) {
        setError(true);
    }
    }
    fetchUsers();
  }, [id]);
  // top line in [] when need updating we write the updated state.

  const searchHandler = async () =>{
    const res = await fetch(`htTps://jsonplaceholder.typicode.com/users/${id}`);
    const json = await res.json();
    console.log(json);
  }

  return (
    <div>
        {id  > 10 && <Counter />} {/*if id is lower than 10 the counter component is unmounted */}
        <input  type="text"
                placeholder="enter id"
                value={id}
                onChange={event => setId(event.target.value)}/>
        <button onClick={searchHandler}>search</button>
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
