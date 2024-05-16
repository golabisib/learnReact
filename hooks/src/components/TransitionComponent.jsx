import { useState } from "react";

function TransitionComponent() {
    console.log("transitionComponentIsRendered")
	// state batching
	const [counter, setCounter] = useState(1);
	const [value, setValue] = useState("");

	const clickHandler = () => {
		setCounter((counter) => counter + 1);
		setCounter((counter) => counter + 1);
		setCounter((counter) => counter + 1);
        setValue("golabi")
	};

	return (
		<div>
			<p>{counter} - {value}</p>
			<button type="button" onClick={clickHandler}>
				+
			</button>
		</div>
	);
}

export default TransitionComponent;
