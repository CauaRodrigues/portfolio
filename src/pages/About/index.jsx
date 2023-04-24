import React from "react";

import * as S from "./page.styled";

export default function About() {
	return (
		<main>
			<S.SectionAbout>
				<S.TextContent>
					<h1 className="gradient_text">
						Eu sou Cauã,
						<br /> prazer!
					</h1>

					<p>
						Sou um desenvolvedor frontend apaixonado por criar e desenvolver
						soluções para web desde 2021. Tenho habilidades tanto em design
						quanto em programação e busco constantemente aprimorar meus
						conhecimentos e técnicas para entregar soluções de alta qualidade.
						Longe do computador, gosto de ouvir música, ler livros e passar
						tempo com amigos e família.
					</p>

					<p>
						Atualmente, meu foco é desenvolver aplicações práticas que tenham um
						impacto positivo na rotina das pessoas, tanto para clientes/usuários
						quanto para a comunidade open-source. Meu objetivo é criar soluções
						úteis e relevantes, que possam fazer a diferença na vida das pessoas
						e ajudar a resolver problemas reais.
					</p>
				</S.TextContent>

				<S.ImageContent>
					<S.Avatar>
						<img src="/assets/photo.png" alt="Cauã Rodrigues" />
					</S.Avatar>

					<S.Contact>
						<S.SocialIcon>
							<img src="/assets/icons/github.svg" alt="github icon" />
							<figcaption>/CauaRodrigues</figcaption>
						</S.SocialIcon>

						<S.SocialIcon>
							<img src="/assets/icons/linkedin.svg" alt="linkedin icon" />
							<figcaption>/in/cauaassis</figcaption>
						</S.SocialIcon>

						<S.SocialIcon>
							<img src="/assets/icons/discord.svg" alt="discord icon" />
							<figcaption>akamatu#0081</figcaption>
						</S.SocialIcon>

						<S.SocialIcon>
							<img
								src="/assets/icons/frontendmentor.svg"
								alt="frontend mentor icon"
							/>
							<figcaption>@CauaRodrigues</figcaption>
						</S.SocialIcon>

						<S.SocialIcon>
							<img src="/assets/icons/codewars.svg" alt="codewars icon" />
							<figcaption>@akamatu</figcaption>
						</S.SocialIcon>

						<S.Divider />

						<S.SocialIcon>
							<img src="/assets/icons/email.svg" alt="email icon" />
							<figcaption>assis.developer@gmail.com</figcaption>
						</S.SocialIcon>
					</S.Contact>
				</S.ImageContent>
			</S.SectionAbout>
		</main>
	);
}
