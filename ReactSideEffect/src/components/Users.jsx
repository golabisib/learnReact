// useEffect
import { useEffect } from "react"

function Users() {
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => console.log(json))
  }, []);

  return (
    <div>
        users
    </div>
  )
}

export default Users
