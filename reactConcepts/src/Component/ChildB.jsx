

import PropTypes from "prop-types"
function ChildB({number}) {
  return (
    <div>
        <h3>Child B</h3>
        <p>{number}</p>
    </div>
  )
}

ChildB.propTypes = {
  number: PropTypes.any
}

export default ChildB
