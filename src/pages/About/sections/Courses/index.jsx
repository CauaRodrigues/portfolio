import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { useTheme } from "styled-components";
import * as S from "./section.styled";

export default function Courses() {
	const theme = useTheme();

	return (
		<S.CoursesSection>
			<h2 className="gradient_text">Cursos e Formações</h2>

			<S.List>
				<S.Item>
					<S.TopItem>
						<h3>
							Técnico em Desenvolvimento de Sistemas. <span>SENAI-SP</span>
						</h3>

						<S.DateItem>
							<AiOutlineCalendar size={18} color={theme.colors.primary} />
							<span>2021-2022</span>
						</S.DateItem>
					</S.TopItem>

					<S.DescriptionItem>
						This is an intensive, hands-on learning experience that will
						challenge you to get out of your chair and out into the real world
						to talk to people and test your ideas. You'll leave this experience
						equipped and energized to apply the human-centered design process to
						challenges across industries, sectors, and geographies to generate
						breakthrough ideas.
					</S.DescriptionItem>
				</S.Item>

				<S.Item>
					<S.TopItem>
						<h3>
							Web Moderno JavaScript. <span>Udemy / Cod3r</span>
						</h3>

						<S.DateItem>
							<AiOutlineCalendar size={18} color={theme.colors.primary} />
							<span>2022-2023</span>
						</S.DateItem>
					</S.TopItem>

					<S.DescriptionItem>
						This is an intensive, hands-on learning experience that will
						challenge you to get out of your chair and out into the real world
						to talk to people and test your ideas. You'll leave this experience
						equipped and energized to apply the human-centered design process to
						challenges across industries, sectors, and geographies to generate
						breakthrough ideas.
					</S.DescriptionItem>
				</S.Item>

				<S.Item>
					<S.TopItem>
						<h3>
							Desenvolvedor Front-end. <span>Vai na web</span>
						</h3>

						<S.DateItem>
							<AiOutlineCalendar size={18} color={theme.colors.primary} />
							<span>2022-2023</span>
						</S.DateItem>
					</S.TopItem>

					<S.DescriptionItem>
						This is an intensive, hands-on learning experience that will
						challenge you to get out of your chair and out into the real world
						to talk to people and test your ideas. You'll leave this experience
						equipped and energized to apply the human-centered design process to
						challenges across industries, sectors, and geographies to generate
						breakthrough ideas.
					</S.DescriptionItem>
				</S.Item>
			</S.List>
		</S.CoursesSection>
	);
}
