import PropTypes from "prop-types"
// import WellcomeMessage from "./WellcomeMessage"


function WellcomePage({ children }) {
  return (
    <div>
        <p>Golabi</p>
        {children}
    </div>
  )
}

WellcomePage.propTypes = {
  children: PropTypes.any,
  userName: PropTypes.any
}

export default WellcomePage
