import React from "react";

import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiFrontendmentor, SiCodewars } from "react-icons/si";

import * as S from "./section.styled";

export default function AboutMe() {
	return (
		<S.SectionAbout>
			<S.TextContent>
				<h1 className="gradient_text">
					Eu sou Cauã,
					<br /> prazer!
				</h1>

				<p>
					Sou um desenvolvedor frontend apaixonado por criar e desenvolver
					soluções para web desde 2021. Tenho habilidades tanto em design quanto
					em programação e busco constantemente aprimorar meus conhecimentos e
					técnicas para entregar soluções de alta qualidade. Longe do
					computador, gosto de ouvir música, ler livros e passar tempo com
					amigos e família.
				</p>

				<p>
					Atualmente, meu foco é desenvolver aplicações práticas que tenham um
					impacto positivo na rotina das pessoas, tanto para clientes/usuários
					quanto para a comunidade open-source. Meu objetivo é criar soluções
					úteis e relevantes, que possam fazer a diferença na vida das pessoas e
					ajudar a resolver problemas reais.
				</p>
			</S.TextContent>

			<S.ImageContent>
				<S.Avatar>
					<img src="/assets/photo.png" alt="Cauã Rodrigues" />
				</S.Avatar>

				<S.Contact>
					<a
						href="https://github.com/CauaRodrigues"
						target="_blank"
						rel="noopener noreferrer"
					>
						<S.SocialIcon>
							<BsGithub size={26} />
							<figcaption>/CauaRodrigues</figcaption>
						</S.SocialIcon>
					</a>

					<a
						href="https://www.linkedin.com/in/cauaassis/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<S.SocialIcon>
							<BsLinkedin size={26} />
							<figcaption>/in/cauaassis</figcaption>
						</S.SocialIcon>
					</a>

					<a
						href="https://www.frontendmentor.io/profile/CauaRodrigues"
						target="_blank"
						rel="noopener noreferrer"
					>
						<S.SocialIcon>
							<SiFrontendmentor size={26} />
							<figcaption>@CauaRodrigues</figcaption>
						</S.SocialIcon>
					</a>

					<a
						href="https://www.codewars.com/users/akamatu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<S.SocialIcon>
							<SiCodewars size={26} />
							<figcaption>@akamatu</figcaption>
						</S.SocialIcon>
					</a>

					<S.Divider />

					<a
						href="mailto:assis.developer@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<S.SocialIcon>
							<MdEmail size={26} />
							<figcaption>assis.developer@gmail.com</figcaption>
						</S.SocialIcon>
					</a>
				</S.Contact>
			</S.ImageContent>
		</S.SectionAbout>
	);
}
