import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiFrontendmentor, SiCodewars } from "react-icons/si";
import { StyledButton } from "@styled/components/Button";
import * as S from "./contact.styled";
import { useTheme } from "styled-components";

export default function Contact() {
	const { colors } = useTheme();

	return (
		<S.ContactSection>
			<S.ContactTitle>
				<h2>Entre em contato</h2>

				<p>
					Tem uma pergunta ou proposta, ou apenas deseja dizer oi? Vá em frente.
				</p>
			</S.ContactTitle>

			<S.Form>
				<div className="form__group-fields">
					<S.FormGroup>
						<S.FormField
							type="text"
							name="name"
							id="name"
							autoComplete="off"
							required
						/>
						<S.FormLabel className="form__label" htmlFor="name">
							Nome
						</S.FormLabel>
					</S.FormGroup>

					<S.FormGroup>
						<S.FormField
							type="email"
							name="email"
							id="email"
							autoComplete="off"
							required
						/>
						<S.FormLabel className="form__label" htmlFor="email">
							E-mail
						</S.FormLabel>
					</S.FormGroup>
				</div>

				<S.FormGroupMessage>
					<S.FormMessage
						as="textarea"
						name="message"
						id="message"
						required
					></S.FormMessage>
					<S.FormLabel className="form__label" htmlFor="email">
						Mensagem
					</S.FormLabel>
				</S.FormGroupMessage>

				<StyledButton
					bgColor={colors.main}
					color={colors.light}
					width={145}
					onClick={() => console.log("Email enviado")}
				>
					Enviar
				</StyledButton>
			</S.Form>

			<S.SocialMedias>
				<S.Divider />

				<S.LinksIcons>
					<a
						href="https://www.linkedin.com/in/cauaassis/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<BsLinkedin size={28} />
					</a>

					<a
						href="https://github.com/CauaRodrigues"
						target="_blank"
						rel="noopener noreferrer"
					>
						<BsGithub size={28} />
					</a>

					<a
						href="mailto:assis.developer@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<MdEmail size={28} />
					</a>

					<a
						href="https://www.frontendmentor.io/profile/CauaRodrigues"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiFrontendmentor size={28} />
					</a>

					<a
						href="https://www.codewars.com/users/akamatu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiCodewars size={28} />
					</a>
				</S.LinksIcons>
			</S.SocialMedias>
		</S.ContactSection>
	);
}
