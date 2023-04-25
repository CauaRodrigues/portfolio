import React from "react";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@styled/GlobalStyles";
import { fonts, colors } from "@styled/theme";
import Router from "./router";

export default function Root() {
	return (
		<ThemeProvider theme={{ colors, fonts }}>
			<GlobalStyles />

			<RouterProvider router={Router} />
		</ThemeProvider>
	);
}
