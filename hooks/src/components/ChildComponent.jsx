import PropTypes from "prop-types"
import { memo } from "react";
function ChildComponent({ number }) {
	console.log("ChildComp is rendered");

	return <div>Child {number}</div>;
}

ChildComponent.propTypes = {
  number: PropTypes.any
}

export default memo(ChildComponent);
