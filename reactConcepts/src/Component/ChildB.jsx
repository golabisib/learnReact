

import PropTypes from "prop-types"
function ChildB({number, setNumber}) {
  return (
    <div style={{border: "2px solid black", padding:"10px", margin: "20px"}}>
        <h3>Child B</h3>
        <p>{number}</p>
        <button onClick={() => setNumber((number) => number + 3)}>+3</button>
    </div>
  )
}

ChildB.propTypes = {
  number: PropTypes.number,
  setNumber: PropTypes.func
}

export default ChildB
