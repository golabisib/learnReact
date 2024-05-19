import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);
  return (
    <div>
      <h2>users</h2>
      {users.loading ? <h3>loading...</h3> : null}
      {users.users.length
        ? users.users.map((user) => <p key={user.id}>{user.name}</p>)
        : null}
    </div>
  );
}

export default Users;
