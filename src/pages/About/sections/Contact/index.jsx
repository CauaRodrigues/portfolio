import React, { useState } from "react";
import { useTheme } from "styled-components";
import emailjs from "@emailjs/browser";

import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiFrontendmentor, SiCodewars } from "react-icons/si";

import { StyledButton } from "@styled/components/Button";
import * as S from "./contact.styled";

class TemplateParams {
	constructor(name, email, message) {
		this.from_name = name;
		this.reply_to = email;
		this.message = message;
	}

	get params() {
		return {
			from_name: this.from_name,
			reply_to: this.reply_to,
			message: this.message,
		};
	}
}

export default function Contact() {
	const [contactName, setContactName] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	const [contactMessage, setContactMessage] = useState("");
	const { colors } = useTheme();

	const sendEmail = (e) => {
		e.preventDefault();
		const ContactDetails = new TemplateParams(
			contactName,
			contactEmail,
			contactMessage
		).params;

		emailjs
			.send(
				"default_service",
				"contact_form",
				ContactDetails,
				import.meta.env.VITE_APP_API_KEY
			)
			.then(console.log, console.log);

		setContactName("");
		setContactEmail("");
		setContactMessage("");
	};

	return (
		<S.ContactSection>
			<S.ContactTitle>
				<h2>Entre em contato</h2>

				<p>
					Tem uma pergunta ou proposta, ou apenas deseja dizer oi? Vá em frente.
				</p>
			</S.ContactTitle>

			<S.Form onSubmit={sendEmail}>
				<div className="form__group-fields">
					<S.FormGroup>
						<S.FormField
							type="text"
							name="from_name"
							id="from_name"
							value={contactName}
							onChange={(e) => setContactName(e.target.value)}
							autoComplete="off"
							required
						/>
						<S.FormLabel className="form__label" htmlFor="from_name">
							Nome
						</S.FormLabel>
					</S.FormGroup>

					<S.FormGroup>
						<S.FormField
							type="email"
							name="reply_to"
							id="reply_to"
							value={contactEmail}
							onChange={(e) => setContactEmail(e.target.value)}
							autoComplete="off"
							required
						/>
						<S.FormLabel className="form__label" htmlFor="reply_to">
							E-mail
						</S.FormLabel>
					</S.FormGroup>
				</div>

				<S.FormGroupMessage>
					<S.FormMessage
						as="textarea"
						name="message"
						id="message"
						value={contactMessage}
						onChange={(e) => setContactMessage(e.target.value)}
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
					type="submit"
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
						// href="mailto:assis.developer@gmail.com"
						href="mailto:assis.developer@gmail.com?subject=Portifolio: Mensagem de ${name}&body=${message}"
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
