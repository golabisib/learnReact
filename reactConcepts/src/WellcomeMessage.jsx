

import PropTypes from "prop-types"
function WellcomeMessage({ userName}) {
  return (
    <div>
        <h1>Hello {userName}</h1>
    </div>
  )
}

WellcomeMessage.propTypes = {
  userName: PropTypes.any
}

export default WellcomeMessage
