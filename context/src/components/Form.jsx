import { useContext, useState } from "react"
import { UserContext } from "../App"


function Form() {
    const [text, setText] = useState("");
    const { users, setUsers } = useContext(UserContext);

    const addHandler = () => {
        setUsers( (users) => [
            ...users,
            { id: Math.floor(Math.random() * 100), name: text },
        ]);
    };

  return (
    <div>
       <input   type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
       <button  type="button"
                onClick={addHandler}> Add </button>
    </div>
  )
}

export default Form
