import { Outlet } from "@tanstack/react-router";

import AppBar from "./app-bar";

const App = () => {
	return (
		<>
			<AppBar />
			<Outlet />
		</>
	);
};
export default App;
