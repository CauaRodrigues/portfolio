import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";

import Router from "./router";
import GlobalStyles from "@styled/GlobalStyles";
import theme from "@styled/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			<RouterProvider router={Router} />
		</ThemeProvider>
	</React.StrictMode>
);
