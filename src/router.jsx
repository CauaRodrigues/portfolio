import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

export default Router;
