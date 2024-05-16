// Memoization

// State
// Context
// Parent
import { useState, useMemo, useCallback } from "react";
import ChildComponent from "./ChildComponent";
import { useTitle } from "../hooks/useTitle";

function MemoComponent() {
	console.log("MemoComponent is rendered");
	const [counter, setCounter] = useState(0);
	const [number, setNumber] = useState(0);

	const slow = useMemo(() => {
		for (let index = 0; index < 100000000; index++) {
			return counter;
		}
	}, [counter]);

	const clickHandler = useCallback(() => {
		setNumber((number) => number + 1);
	},[number])

    useTitle("Memo Page")

	return (
		<div>
			<p>{slow}</p>
			<button
				type="button"
				onClick={() => setCounter((counter) => counter + 1)}
			>
				+
			</button>
			<ChildComponent number={number} clickHandler={clickHandler} />

			{/* <p>{number}</p>
			<button type="button" onClick={() => setNumber((number) => number + 1)}>
				+
			</button> */}
		</div>
	);
}

export default MemoComponent;
