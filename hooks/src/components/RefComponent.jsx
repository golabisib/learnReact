import { useEffect, useRef, useState } from "react";

function RefComponent() {
	console.log("render");

	const services = [
		{ id: 1, title: "payment" },
		{ id: 2, title: "Education" },
		{ id: 3, title: "payment" },
	];

	const number = useRef(0);
	const input = useRef(null);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
        input.current.focus();
    }, []);

	const numberHandler = () => {
		number.current = number.current + 5;
		services.push({ id: 2, title: "Education" });
		console.log(number);
		console.log(services);
	};

	const counterHandler = () => {
		setCounter((counter) => counter + 1);
	};

	return (
		<div>
			<input type="text" ref={input} />
			<br />
			<button type="button" onClick={numberHandler}>
				+
			</button>
			<ul>
				{services.map((s) => (
					<li key={s.id}>{s.title}</li>
				))}
			</ul>
			<p>{counter}</p>
			<button type="button" onClick={counterHandler}>
				+ counter
			</button>
		</div>
	);
}

export default RefComponent;
