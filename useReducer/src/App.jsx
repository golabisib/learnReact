import { useState } from 'react'
import { useReducer } from 'react';

const initialState = { count: 0, number: 1};

const reducer = (state, action) => {
    console.log({state, action})
    switch (action.type){
        case "increase":
            return { ...state, count: state.count + 1};
        case "increaseByAmount":
            return { ...state, count: state.count + action.payload };
        case "reset":
            return { ...state, count: 0};
        case "decrease":
            return { ...state, count: state.count - 1 };
        case "up":
            return { ...state, number: state.number + 1 };
        default:
            throw new Error("Invalid Action")

    }
};

function App() {
    // state management
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [count, setCount] = useState(0)

    const increaseHandler = () =>{
        // setCount((count) => count + 1)
        dispatch({ type: "increase" });
    };
    const increaseByAmountHandler = () =>{
        // setCount((count) => count + 1)
        dispatch({ type: "increaseByAmount", payload : 10 });
    };
    const resetHandler = () =>{
        // setCount(0)
        dispatch({ type: "reset" });
    };
    const decreaseHandler = () =>{
        // setCount((count) => count - 1)
        dispatch({ type: "decrease" })
    };

  return (
    <>
      <h1>useReducer </h1>
      <button type='button' onClick={increaseHandler}>Increase</button>
      <button type='button' onClick={increaseByAmountHandler}>Increase By Amount</button>
      <button type='button' onClick={resetHandler}>Reset</button>
      <button type='button' onClick={decreaseHandler}>Decrease</button>
      <span>{state.count}</span>
      <hr />
      <p>{state.number}</p>
      <button type='button' onClick={() => dispatch({type: "up"})}>Up</button>
    </>
  )
}

export default App
