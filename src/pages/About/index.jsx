import React from "react";

import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Courses from "./sections/Courses";
import Contact from "./sections/Contact";

export default function About() {
	return (
		<main>
			<AboutMe />
			<Projects />
			<Skills />
			<Courses />
			<Contact />
		</main>
	);
}
