import axios from "axios";
import { useState } from "react"


function Delete() {
    const [id, setId] = useState("");

    const deleteHandler = () => {
        axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( (res) => console.log(res))
    }

  return (
    <div>
        <input  type="text"
                placeholder="id"
                value={id}
                onChange={ (event) => (setId(event.target.value))}
        />
        <button type="button"
                onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default Delete
