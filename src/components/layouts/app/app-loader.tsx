import { Loader } from "lucide-react";

const AppLoader = () => {
	return (
		<main className="h-screen w-full text-primary/80 inline-flex items-center justify-center bg-card z-50">
			<Loader size={50} className="animate-spin" />
		</main>
	);
};
export default AppLoader;
