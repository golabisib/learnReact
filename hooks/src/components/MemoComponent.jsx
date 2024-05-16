// Memoization

// State
// Context
// Parent
import { useState, useMemo } from "react";
// import ChildComponent from "./ChildComponent";

function MemoComponent() {
	console.log("MemoComponent is rendered");
	const [counter, setCounter] = useState(0);
	const [number, setNumber] = useState(0);

	const slow = useMemo(() => {
		for (let index = 0; index < 100000000 ; index++) {
			return counter;
		}
	}, [counter]);

	return (
		<div>
			<p>{slow}</p>
			<button
				type="button"
				onClick={() => setCounter((counter) => counter + 1)}
			>
				+
			</button>
			{/* <ChildComponent number={number} /> */}

			<p>{number}</p>
			<button type="button" onClick={() => setNumber((number) => number + 1)}>
				+
			</button>
		</div>
	);
}

export default MemoComponent;
