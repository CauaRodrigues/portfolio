import React from "react";
import * as S from "./page.styled";
import CardProject from "@components/CardProject";

import { data } from "./data";

export default function Projects() {
	console.log(data);
	return (
		<S.ProjectsContainer>
			<S.ProjectsTitle>
				<h1 className="gradient_text">Works, Hobbies e Open Source</h1>

				<p>
					Lista dos principais projetos que venho desenvolvendo durante a minha
					jornada como desenvolvedor.
				</p>
			</S.ProjectsTitle>

			<S.ProjectsSection>
				{data.map((project) => {
					return (
						<React.Fragment key={project.id}>
							<CardProject
								name={project.name}
								description={project.description}
								links={project.links}
								techsList={project.techsList}
							/>
						</React.Fragment>
					);
				})}
			</S.ProjectsSection>
		</S.ProjectsContainer>
	);
}
