

import PropTypes from "prop-types"
function ChildA({number}) {


  return (
    <div>
        <h3>Child A</h3>
        <p>{number}</p>
    </div>
  )
}

ChildA.propTypes = {
  number: PropTypes.any
}

export default ChildA
