import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../graphql/mutation"

function CreateUser() {
    const [createUser, {loading, data, error, called}] = useMutation(CREATE_USER);
    console.log({loading, data, error, called})
  return (
    <div>
        <button type="button" onClick={() => createUser()}>Create User</button>
    </div>
  )
}

export default CreateUser
