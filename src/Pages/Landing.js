import React from "react";
import Hero from "../Components/Hero";
import How from "../Components/how";
import Blog from "../Components/Blog";
import FAQs from "../Components/FAQs";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
	return (
		<>
			<Hero />
			<How />
			<Blog />
			<FAQs />
		</>
	);
}

export default Home;
