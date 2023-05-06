import React from "react";
import { useTheme } from "styled-components";

import { AiOutlineFolder, AiFillAndroid } from "react-icons/ai";
import { BsGithub, BsTerminal } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

import * as S from "./cardProject.styled";

export default function CardProject({ name, description, links, techsList }) {
	const { colors } = useTheme();

	return (
		<S.BoxProject>
			<S.TopProject>
				<AiOutlineFolder size={48} color={colors.light} />

				<S.TopIconsLink>
					<a href={links.github} target="_blank" rel="noopener noreferrer">
						<BsGithub size={32} />
					</a>

					<a
						href={links.projectUrl.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{links.projectUrl.mobile ? (
							<AiFillAndroid size={32} />
						) : links.projectUrl.cli ? (
							<BsTerminal size={32} />
						) : (
							<HiOutlineExternalLink size={32} />
						)}
					</a>
				</S.TopIconsLink>
			</S.TopProject>

			<S.BoxAboutProject>
				<h3>{name}</h3>

				<p dangerouslySetInnerHTML={{ __html: description }} />
			</S.BoxAboutProject>

			<S.ListTechs>
				{techsList
					? techsList.map((tech, index) => <S.Tech key={index}>{tech}</S.Tech>)
					: null}
			</S.ListTechs>
		</S.BoxProject>
	);
}
