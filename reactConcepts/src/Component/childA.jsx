

import PropTypes from "prop-types"
import StyledDiv from "./StyledDiv"
function ChildA({number, setNumber}) {
// SetNumber is passing function as props

  return (
    <div>
        <StyledDiv>
        <h3>Child A</h3>
        <p>{number}</p>
        <button onClick={() => setNumber((number) => number + 1)}>+1</button>
        </StyledDiv>
    </div>
  )
}

ChildA.propTypes = {
  number: PropTypes.number,
  setNumber: PropTypes.func
}

export default ChildA
