// events

// function Counter() {
//     const increaseHandler = () => console.log("increase");

//     return (
//     <>
//     <h1>counter</h1>
//     <button onClick={increaseHandler}>increase</button>
//     </>
//   )
// }
// // or:
// // just <button onClick={() => console.log("increase")}>increase</button>
// // without any external function
// export default Counter

// hook
import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const increaseHandler = () => setCounter(counter + 1);

    return (
        <>
        <h1>counter</h1>
        <p>{counter}</p>
        <button onClick={increaseHandler}>increase</button>
        </>
  )
}
//46

export default Counter
