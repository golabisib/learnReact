import ChildA from "./childA"
import ChildB from "./ChildB"
import { useState } from "react";




function Parent() {
    const [number , setNumber] = useState(0);
  return (
    <div style={{border: "2px solid black", padding:"10px", margin: "20px"}}>
        <h3>Parent</h3>
        <ChildA number={number} setNumber={setNumber} />
        <ChildB number={number} setNumber={setNumber} />
    </div>
  )
}

export default Parent
