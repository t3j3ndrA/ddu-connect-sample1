import Home from "./pages/Home";
import { Route, Link, Routes } from "react-router-dom";
import Buzz from "./pages/Buzz";
import AboutUs from "./pages/AboutUs";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/buzz" element={<Buzz />} />
				<Route path="/about-us" element={<AboutUs />} />
			</Routes>
		</div>
	);
}

export default App;
