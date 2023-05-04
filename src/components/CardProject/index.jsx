import React from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";

import { AiOutlineFolder, AiFillAndroid } from "react-icons/ai";
import { BsGithub, BsTerminal } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

import * as S from "./cardProject.styled";

export default function CardProject({ name, description, links, techsList }) {
	const { colors } = useTheme();

	const isMobile = useMediaQuery({ query: "(max-width: 520px)" });

	return (
		<S.BoxProject>
			<S.TopProject>
				<AiOutlineFolder size={isMobile ? 52 : 64} color={colors.light} />

				<S.TopIconsLink>
					<a href={links.github} target="_blank" rel="noopener noreferrer">
						<BsGithub size={36} />
					</a>

					<a
						href={links.projectUrl.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{links.projectUrl.mobile ? (
							<AiFillAndroid size={36} />
						) : links.projectUrl.cli ? (
							<BsTerminal size={36} />
						) : (
							<HiOutlineExternalLink size={36} />
						)}
					</a>
				</S.TopIconsLink>
			</S.TopProject>

			<S.BoxAboutProject>
				<h3>{name}</h3>

				<p>{description}</p>
			</S.BoxAboutProject>

			<S.ListTechs>
				{techsList
					? techsList.map((tech, index) => <S.Tech key={index}>{tech}</S.Tech>)
					: null}
			</S.ListTechs>
		</S.BoxProject>
	);
}
