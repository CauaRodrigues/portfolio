import React from "react";
import { useTheme } from "styled-components";
import { StyledButton } from "@styled/components/Button";

import * as S from "./section.styled";
import { Link } from "react-router-dom";

export default function Projects() {
	const { colors } = useTheme();

	return (
		<S.ProjectsSection>
			<h2 className="gradient_text">Últimos Projetos</h2>

			<S.Content>
				<S.Project>
					<img
						className="project-image"
						src="assets/projects/pickles.png"
						alt="Search Pickles"
					/>

					<S.InfosProject>
						<h3>Pickles Search</h3>
						<span className="aplication-type">Single Page Aplication</span>

						<S.BoxDescription>
							<p>
								Site de busca de personagens, episódios e localizações que fazem
								parte da série Rick And Morty. Permite aos usuários saberem mais
								sobre os personagens da série.
							</p>
						</S.BoxDescription>

						<S.Technologies className="align-group">
							<span>JavaScript</span>
							<span>React</span>
							<span>Styled-Components</span>
							<span>Axios</span>
						</S.Technologies>

						<S.GroupLink className="align-group">
							<a
								href="https://github.com/CauaRodrigues/rick-and-morty-search"
								target="_blank"
							>
								<img src="assets/icons/github.svg" alt="repositório" />
							</a>

							<a href="https://pickles-search.vercel.app/" target="_blank">
								<img src="assets/icons/link.svg" alt="link da aplicação" />
							</a>
						</S.GroupLink>
					</S.InfosProject>
				</S.Project>

				<S.Project>
					<img
						className="project-image"
						src="assets/projects/space.png"
						alt="Space Tourism"
					/>

					<S.InfosProject>
						<h3>Space Tourism</h3>
						<span className="aplication-type">Single Page Aplication</span>

						<S.BoxDescription>
							<p>
								Site fictício que simula uma página de turismo espacial. É
								aprensentado os possíveis destinos, sua equipe e as tecnologias
								utilizadas para fazer a viagem acontecer.
							</p>
						</S.BoxDescription>

						<S.Technologies className="align-group">
							<span>JavaScript</span>
							<span>React</span>
							<span>Styled-Components</span>
							<span>TypeScript</span>
						</S.Technologies>

						<S.GroupLink className="align-group">
							<a
								href="https://github.com/CauaRodrigues/space-tourism"
								target="_blank"
							>
								<img src="assets/icons/github.svg" alt="repositório" />
							</a>

							<a href="https://space-tourism-aka.vercel.app/" target="_blank">
								<img src="assets/icons/link.svg" alt="link da aplicação" />
							</a>
						</S.GroupLink>
					</S.InfosProject>
				</S.Project>

				<S.Project>
					<img
						className="project-image"
						src="assets/projects/thincut.png"
						alt="Thin Cut"
					/>

					<S.InfosProject>
						<h3>Thin Cut</h3>
						<span className="aplication-type">Landing Page</span>

						<S.BoxDescription>
							<p>
								Landing page que apresenta uma barbearia fictícia por completo.
								Demonstrando os serviços realizados pela barbearia, galeria de
								fotos do local e outras informações gerais da barbearia.
							</p>
						</S.BoxDescription>

						<S.Technologies className="align-group">
							<span>JavaScript</span>
							<span>React</span>
							<span>Styled-Components</span>
							<span>Vite</span>
						</S.Technologies>

						<S.GroupLink className="align-group">
							<a
								href="https://github.com/CauaRodrigues/thin-cut"
								target="_blank"
							>
								<img src="assets/icons/github.svg" alt="repositório" />
							</a>

							<a
								href="https://github.com/CauaRodrigues/thin-cut"
								target="_blank"
							>
								<img src="assets/icons/link.svg" alt="link da aplicação" />
							</a>
						</S.GroupLink>
					</S.InfosProject>
				</S.Project>

				<Link to="/projects">
					<StyledButton bgColor={colors.primary} color={colors.light}>
						Ver Mais Projetos
					</StyledButton>
				</Link>
			</S.Content>
		</S.ProjectsSection>
	);
}
