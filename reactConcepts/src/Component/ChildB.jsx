

import PropTypes from "prop-types"
function ChildB({number, setNumber, text}) {

  return (
    <div style={{border: "2px solid black", padding:"10px", margin: "20px"}}>
        <h3>Child B</h3>
        <p>{number}</p>
        {text}
    </div>
  )
}

ChildB.propTypes = {
  number: PropTypes.number,
  setNumber: PropTypes.func
}

export default ChildB
