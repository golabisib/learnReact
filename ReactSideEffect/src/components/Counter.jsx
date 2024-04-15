import { useEffect, useState } from "react"


function Counter() {
    const [count, setaCount] = useState(0);
    useEffect( () => {
        const interval = setInterval( () =>{
            setaCount((count) => count + 1 );
        }, 1000);
        // Bottom line is meaning when the component is unmounted , this function is run.
        return () => {
            console.log("cleanUp");
            clearInterval(interval);// clean the addition interval function.
        } // cleanUp function
    }, [count]);
  return (
    <div>{count}</div>
  )
}

export default Counter
