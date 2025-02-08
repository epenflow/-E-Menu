import { Loader as LucideLoader } from "lucide-react";

const Loader = () => {
	return (
		<main className="h-screen w-full text-primary/80 inline-flex items-center justify-center bg-card z-50">
			<LucideLoader size={50} className="animate-spin" />
		</main>
	);
};
export default Loader;
