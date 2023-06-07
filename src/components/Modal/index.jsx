import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BsGithub, BsLinkedin, BsCodeSlash } from "react-icons/bs";
import { SiCodewars, SiFrontendmentor } from "react-icons/si";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { MdEmail, MdComputer } from "react-icons/md";
import { VscRepo } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import * as S from "./modal.styled";

export default function Modal({ handlerModal, isOpen }) {
	const navigate = useNavigate();
	const Wrapper = useRef();

	useEffect(() => {
		if (isOpen) {
			document.documentElement.style.overflow = "hidden";
		}
	}, []);

	function closeModal() {
		handlerModal(false);
		document.documentElement.style.overflow = "auto";
	}

	return (
		<S.ModalWrapper
			className="wrapper"
			ref={Wrapper}
			onClick={(e) => {
				if (e.target === Wrapper.current) {
					closeModal();
				}
			}}
		>
			<S.ModalBox>
				<S.HeaderModal>
					<input type="text" placeholder="O que está buscando?" />

					<button onClick={closeModal}>
						<IoMdClose size={26} />
					</button>
				</S.HeaderModal>
				<S.ContentModal>
					<h2>Geral</h2>
					<ul>
						<a
							href="mailto:assis.developer@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<li>
								<MdEmail size={28} />
								<span>Enviar Email</span>
							</li>
						</a>

						<a
							href="https://github.com/CauaRodrigues/portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							<li>
								<VscRepo size={28} />
								<span>Repositório</span>
							</li>
						</a>

						<button
							onClick={() => {
								closeModal();
								navigate("/about");
								setTimeout(() => {
									document
										.querySelector("#contato")
										.scrollIntoView({ behavior: "smooth" });
								}, 100);
							}}
						>
							<li>
								<AiFillMessage size={28} />
								<span>Contato</span>
							</li>
						</button>
					</ul>

					<h2>Ir para</h2>
					<ul>
						<Link to="/">
							<li>
								<AiFillHome size={28} />
								<span>Home</span>
							</li>
						</Link>

						<Link to="/about">
							<li>
								<CgProfile size={28} />
								<span>Sobre</span>
							</li>
						</Link>

						<Link to="/projects">
							<li>
								<BsCodeSlash size={28} />
								<span>Projetos</span>
							</li>
						</Link>

						<Link to="/setup">
							<li>
								<MdComputer size={28} />
								<span>Setup</span>
							</li>
						</Link>
					</ul>

					<h2>Redes Sociais</h2>
					<ul>
						<a
							href="https://www.linkedin.com/in/cauaassis/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<li>
								<BsLinkedin size={28} />
								<span>LinkedIn</span>
							</li>
						</a>

						<a
							href="https://github.com/CauaRodrigues"
							target="_blank"
							rel="noopener noreferrer"
						>
							<li>
								<BsGithub size={28} />
								<span>GitHub</span>
							</li>
						</a>

						<a
							href="https://www.frontendmentor.io/profile/CauaRodrigues"
							target="_blank"
							rel="noopener noreferrer"
						>
							<li>
								<SiFrontendmentor size={28} />
								<span>Frontend Mentor</span>
							</li>
						</a>

						<a
							href="https://www.codewars.com/users/akamatu"
							target="_blank"
							rel="noopener noreferrer"
						>
							<li>
								<SiCodewars size={28} />
								<span>Code Wars</span>
							</li>
						</a>
					</ul>
				</S.ContentModal>
			</S.ModalBox>
		</S.ModalWrapper>
	);
}
