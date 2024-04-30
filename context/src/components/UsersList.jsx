import { useContext } from "react"
import { UserContext } from "../App";

function UsersList() {
    const  { users }  = useContext(UserContext);
    console.log(users)

  return (
    <div>
        {users.map( (user) => (
        <p key={user.id}>{user.name}</p>
        ))}
    </div>
  );
}

export default UsersList
