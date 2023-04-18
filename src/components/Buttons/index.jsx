import React, { useContext } from "react";
import { BsSunFill } from "react-icons/bs";

import { ThemeContext } from "@context/ThemeContext";
import { colors } from "@styled/theme";

import * as S from "./buttons.styled";

export const ChangeThemeButton = () => {
	const { setColorTheme } = useContext(ThemeContext);

	function handlerTheme() {
		setColorTheme((prevValue) =>
			prevValue.name === "dark" ? colors.light : colors.dark
		);
	}

	return (
		<S.ChangeThemeButton onClick={handlerTheme} type="button">
			<BsSunFill size={24} />
		</S.ChangeThemeButton>
	);
};
