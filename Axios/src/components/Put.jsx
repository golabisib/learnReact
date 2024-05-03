import axios from "axios";

import { useState } from "react"


function Put() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");


    const updateHandler = () => {
        // axios
        // .patch(`https://jsonplaceholder.typicode.com/posts/${id}` , { title })
        // .then( (res) => (console.log(res)))

        axios
        .put(`https://jsonplaceholder.typicode.com/posts/${id}` , { title })
        .then( (res) => (console.log(res)))
    }
  return (
    <div>
        <input  type="text"
                placeholder="id"
                value={id}
                onChange={ (event) => (setId(event.target.value))}
        />
        <input  type="text"
                placeholder="title"
                value={title}
                onChange={ (event) => (setTitle(event.target.value))}
        />
        <button type="button"
                onClick={updateHandler}>Update Post</button>
    </div>
  );
};

export default Put
