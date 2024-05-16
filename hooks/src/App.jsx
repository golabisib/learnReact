// import TransitionComponent from "./components/TransitionComponent"
// import MemoComponent from "./components/MemoComponent"
// import RefComponent from "./components/RefComponent"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomComponent from "./components/CustomComponent";
import MemoComponent from "./components/MemoComponent";

function App() {
	return (
		<>
			<h1>golabi</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CustomComponent />} />
					<Route path="/memo" element={<MemoComponent />} />
				</Routes>
			</BrowserRouter>
			{/* <RefComponent /> */}
			{/* <MemoComponent /> */}
			{/* <TransitionComponent /> */}
		</>
	);
}

export default App;
