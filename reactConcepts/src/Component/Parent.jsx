import PropTypes from "prop-types"
import ChildA from "./childA"
import ChildB from "./ChildB"
import { useState } from "react";




function Parent() {
    const [number , setNumber] = useState(0);

    const clickHandler = () =>  {
        setNumber((number) => number + 1)
    };
  return (
    <div style={{border: "2px solid black", padding:"10px", margin: "20px"}}>
        <h3>Parent</h3>
        <ChildA number={number} setNumber={setNumber} />
        <ChildB number={number} setNumber={setNumber} button={<Button clickHandler={clickHandler} />}/>
    </div>
  )
}

export default Parent

function Button({ clickHandler }) {
    return <button onClick={clickHandler}>Increase</button>;
}

Button.propTypes = {
    clickHandler: PropTypes.any
}
