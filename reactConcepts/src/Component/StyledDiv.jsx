//children pass

import PropTypes from "prop-types"
function StyledDiv({children}) {
    const styles = { border: "2px solid black", padding:"10px", margin: "20px" }
  return (
    <div style={styles}>{children}</div>
  )
}

StyledDiv.propTypes = {
  children: PropTypes.any
}

export default StyledDiv
