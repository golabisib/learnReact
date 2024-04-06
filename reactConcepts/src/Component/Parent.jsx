import PropTypes from "prop-types"
import { useState } from "react"
;
import ChildA from "./childA"
import ChildB from "./ChildB"
import StyledDiv from "./StyledDiv";




function Parent() {
    const [number , setNumber] = useState(0);

    const clickHandler = () =>  {
        setNumber((number) => number + 1)
    };
  return (
      <div>
        <StyledDiv>
        <h3>Parent</h3>
        <ChildA number={number} setNumber={setNumber} />
        <ChildB number={number} setNumber={setNumber} button={<Button clickHandler={clickHandler} />}/>
        </StyledDiv>
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
