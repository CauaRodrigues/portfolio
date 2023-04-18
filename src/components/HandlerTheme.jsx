import React, { useContext } from "react";
import styled from "styled-components";
import { BsSunFill } from "react-icons/bs";

import { ThemeContext } from "@context/ThemeContext";
import { colors } from "@styled/theme";

export const HandlerTheme = () => {
	const { setColorTheme } = useContext(ThemeContext);

	function handlerTheme() {
		setColorTheme((prevValue) =>
			prevValue.name === "dark" ? colors.light : colors.dark
		);
	}

	return (
		<DefaultButton onClick={handlerTheme} type="button">
			<BsSunFill size={24} />
		</DefaultButton>
	);
};

const DefaultButton = styled.button`
	cursor: pointer;
	background: transparent;
	color: ${({ theme }) => theme.colors.text};
`;
