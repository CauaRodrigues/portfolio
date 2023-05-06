import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "@components/Layout";
import Error from "@pages/Error";
import Home from "@pages/Home";
import About from "@pages/About";
import Projects from "@pages/Projects";
import Setup from "@pages/Setup";

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
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/setup",
				element: <Setup />,
			},
		],
	},
]);

export default Router;
