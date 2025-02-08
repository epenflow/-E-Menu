import DOM from "react-dom/client";

import "~/index.css";

import App from "~/app";

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
	const $root = DOM.createRoot(rootElement);

	$root.render(<App />);
}
