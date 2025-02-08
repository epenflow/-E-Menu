import { Button } from "~/components/ui/button";

import { useAuthStore } from "~/lib/auth";

const App = () => {
	const signOut = useAuthStore().signOut;
	return (
		<>
			<Button onClick={() => signOut()}>sign-out</Button>
			<h1>Dashboard</h1>
		</>
	);
};
export default App;
