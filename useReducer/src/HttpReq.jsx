import { useEffect, useReducer } from "react"

const initialState = {
    isLoading: true,
    data: [],
    error: "",
};
const reducer = (state, action) => {
    console.log({state, action})
    switch(action.type){
        case "SUCCESS":
            return {isLoading: false, data: action.payload , error: ""};
        case "FAILED":
            return {isLoading: false, data: [], error: action.payload}
        default :
            throw new Error("Invalid Action");
    }
};

function HttpReq() {
    const [state, dispatch] = useReducer(reducer, initialState);

useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( (res) => res.json())
    .then( (json) => dispatch({ type: "SUCCESS", payload: json}))
    .catch( (error) => dispatch({type: "FAILED", payload:error.message}));
}, []);

  return (
    <div>
        {state.isLoading && <p>isLoading...</p>}
        <div>
            {state.data.map( (post) => <p key={post.id}>{post.title}</p>)}
        </div>
        {!!state.error && <p>{state.error}</p>}
    </div>
  )
}

export default HttpReq
