import React from "react";
import * as S from "./sectionCourse.styled";
import { useTheme } from "styled-components";
import { AiOutlineCalendar } from "react-icons/ai";

export default function SectionCourse({
	link,
	name,
	institute,
	year,
	description,
}) {
	const { colors } = useTheme();
	return (
		<S.Item>
			<S.TopItem>
				<h3>
					<a href={link} target="_blank" rel="noopener noreferrer">
						{name}.
					</a>{" "}
					<span>{institute}</span>
				</h3>

				<S.DateItem>
					<AiOutlineCalendar size={18} color={colors.primary} />
					<span>{year}</span>
				</S.DateItem>
			</S.TopItem>

			<S.DescriptionItem>{description}</S.DescriptionItem>
		</S.Item>
	);
}
