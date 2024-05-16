import PropTypes from "prop-types";
import { memo } from "react";
function ChildComponent({ number, clickHandler }) {
	console.log("ChildComp is rendered");

	return (
		<div>
			<h3> Child {number}</h3>
            <button type="button" onClick={clickHandler}> + child</button>
		</div>
	);
}

ChildComponent.propTypes = {
  clickHandler: PropTypes.any,
  number: PropTypes.any
}

export default memo(ChildComponent);
