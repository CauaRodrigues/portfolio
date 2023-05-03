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
							<a
								href="https://suicobrasileira.sp.senai.br/curso/85566/115/tecnico-em-desenvolvimento-de-sistemas"
								target="_blank"
								rel="noopener noreferrer"
							>
								Técnico em Desenvolvimento de Sistemas.
							</a>{" "}
							<span>SENAI-SP</span>
						</h3>

						<S.DateItem>
							<AiOutlineCalendar size={18} color={theme.colors.primary} />
							<span>2021-2022</span>
						</S.DateItem>
					</S.TopItem>

					<S.DescriptionItem>
						Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur
						tellus, ridiculus sociosqu habitasse mauris pulvinar curae himenaeos
						suspendisse congue quam, libero vitae sodales eu cras nascetur ante
						a. Magnis inceptos consequat est dignissim nec vulputate nisl,
						facilisi interdum faucibus hendrerit purus viverra mollis turpis,
						urna nibh vivamus id sapien commodo.
					</S.DescriptionItem>
				</S.Item>

				<S.Item>
					<S.TopItem>
						<h3>
							<a
								href="https://www.udemy.com/course/curso-web/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Web Moderno JavaScript.
							</a>{" "}
							<span>Udemy / Cod3r</span>
						</h3>

						<S.DateItem>
							<AiOutlineCalendar size={18} color={theme.colors.primary} />
							<span>2022-2023</span>
						</S.DateItem>
					</S.TopItem>

					<S.DescriptionItem>
						Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur
						tellus, ridiculus sociosqu habitasse mauris pulvinar curae himenaeos
						suspendisse congue quam, libero vitae sodales eu cras nascetur ante
						a. Magnis inceptos consequat est dignissim nec vulputate nisl,
						facilisi interdum faucibus hendrerit purus viverra mollis turpis,
						urna nibh vivamus id sapien commodo.
					</S.DescriptionItem>
				</S.Item>

				<S.Item>
					<S.TopItem>
						<h3>
							<a
								href="https://vainaweb.com.br/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Desenvolvedor Front-end.
							</a>{" "}
							<span>Vai na web</span>
						</h3>

						<S.DateItem>
							<AiOutlineCalendar size={18} color={theme.colors.primary} />
							<span>2022-2023</span>
						</S.DateItem>
					</S.TopItem>

					<S.DescriptionItem>
						Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur
						tellus, ridiculus sociosqu habitasse mauris pulvinar curae himenaeos
						suspendisse congue quam, libero vitae sodales eu cras nascetur ante
						a. Magnis inceptos consequat est dignissim nec vulputate nisl,
						facilisi interdum faucibus hendrerit purus viverra mollis turpis,
						urna nibh vivamus id sapien commodo.
					</S.DescriptionItem>
				</S.Item>
			</S.List>
		</S.CoursesSection>
	);
}
