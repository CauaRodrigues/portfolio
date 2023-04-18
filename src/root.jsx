import React, { useState } from "react";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@styled/GlobalStyles";
import { ThemeContext } from "@context/ThemeContext";
import { fonts, colors } from "@styled/theme";
import Router from "./router";

export default function Root() {
	const [colorTheme, setColorTheme] = useState(colors.dark);

	return (
		<ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
			<ThemeProvider theme={{ colors: colorTheme, fonts }}>
				<GlobalStyles />

				<RouterProvider router={Router} />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
