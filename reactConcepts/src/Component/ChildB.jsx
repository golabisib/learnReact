

import PropTypes from "prop-types"
function ChildB({number, button}) {
    //text is passing JSX as props

  return (
    <div style={{border: "2px solid black", padding:"10px", margin: "20px"}}>
        <h3>Child B</h3>
        <p>{number}</p>
        {button}
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
