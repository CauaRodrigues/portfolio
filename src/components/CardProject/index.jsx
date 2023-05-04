import React from "react";
import { AiOutlineFolder, AiOutlineAndroid } from "react-icons/ai";
import { BsGithub, BsTerminal } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import * as S from "./cardProject.styled";

export default function CardProject({ name, description, links, techsList }) {
	return (
		<S.BoxProject>
			<div>
				<AiOutlineFolder />

				<div>
					<a href={links.github} target="_blank" rel="noopener noreferrer">
						<BsGithub />
					</a>

					<a href="" target="_blank" rel="noopener noreferrer">
						<HiOutlineExternalLink />
					</a>
				</div>
			</div>

			<div>
				<h3>{name}</h3>

				<p>{description}</p>

				<ul>
					{techsList
						? techsList.map((tech, index) => <li key={index}>{tech}</li>)
						: null}
				</ul>
			</div>
		</S.BoxProject>
	);
}
