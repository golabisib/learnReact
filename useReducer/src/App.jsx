import { useState } from 'react'
import { useReducer } from 'react';

const reducer = (state, action) => {
    console.log({state, action})
    switch (action.type){
        case "increase":
            return state + 1;
        case "increaseByAmount":
            return state + action.payload;
        case "reset":
            return 0;
        case "decrease":
            return state - 1;
        default:
            throw new Error("Invalid Action")

    }
};

function App() {
    // state management
    const [count, dispatch] = useReducer(reducer, 0)
    // const [count, setCount] = useState(0)


    const increaseHandler = () =>{
        // setCount((count) => count + 1)
        dispatch({type: "increase"});
    };
    const increaseByAmountHandler = () =>{
        // setCount((count) => count + 1)
        dispatch({type: "increaseByAmount", payload : 10 });
    };
    const resetHandler = () =>{
        // setCount(0)
        dispatch({type: "reset"});
    };
    const decreaseHandler = () =>{
        // setCount((count) => count - 1)
        dispatch({type: "decrease"})
    };

  return (
    <>
      <h1>useReducer </h1>
      <button type='button' onClick={increaseHandler}>Increase</button>
      <button type='button' onClick={increaseByAmountHandler}>Increase By Amount</button>
      <button type='button' onClick={resetHandler}>Reset</button>
      <button type='button' onClick={decreaseHandler}>Decrease</button>
      <span>{count}</span>
    </>
  )
}

export default App
