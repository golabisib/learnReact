import PropTypes from "prop-types"
import WellcomeMessage from "./WellcomeMessage"


function WellcomePage({ userName }) {
  return (
    <div>
        <p>Golabi</p>
        <WellcomeMessage userName={userName}/>
    </div>
  )
}

WellcomePage.propTypes = {
  userName: PropTypes.any
}

export default WellcomePage
