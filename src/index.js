import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import App from "./App";
import "./i18n";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<App />
		</Suspense>
	</React.StrictMode>
);
