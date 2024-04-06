

import PropTypes from "prop-types"
import StyledDiv from "./StyledDiv"
function ChildB({number, button}) {
    //text is passing JSX as props

  return (
    <div>
        <StyledDiv>
        <h3>Child B</h3>
        <p>{number}</p>
        {button}
        </StyledDiv>
    </div>
  )
}

ChildB.propTypes = {
  button: PropTypes.any,
  number: PropTypes.number,
  setNumber: PropTypes.func,
  text: PropTypes.any
}

export default ChildB
