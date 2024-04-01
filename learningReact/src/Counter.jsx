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

// hook & state
import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [isShow, setShow] = useState(true);

    const increaseHandler = () => setCounter(counter => counter + 1);
    const increaseHandler3 = () => {
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)
    };
    const stopHandler = () => setCounter(0);


    const showHandler = () => setShow(true);
    const hideHandler = () => setShow(false);


    return (
        <>
        <button onClick={showHandler}>show</button>
        <button onClick={hideHandler}>hide</button>
        {
            isShow && (
            <div>
                <h1>counter</h1>
                <p>{counter}</p>
                <button onClick={increaseHandler}>increase 1</button>
                <button onClick={increaseHandler3}>increase 3</button>
                <button onClick={stopHandler}>stop</button>
            </div>
            ) }
        </>
        );
}
//50

export default Counter
