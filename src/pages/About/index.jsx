import React from "react";
import styled from "styled-components";

import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Courses from "./sections/Courses";
import Contact from "./sections/Contact";

export default function About() {
	return (
		<ContainerStyled>
			<AboutMe />
			<Projects />
			<Skills />
			<Courses />
			<Contact />
		</ContainerStyled>
	);
}

const ContainerStyled = styled.main`
	width: 100%;
	padding: 24px 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	gap: 2.5rem;

	@media (max-width: 580px) {
		padding: 24px 0;
	}
`;
