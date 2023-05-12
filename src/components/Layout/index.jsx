import React from "react";
import { Outlet } from "react-router";

import ScrollToTop from "@components/ScrollToTop";
import Header from "@components/Header";

export default function Layout() {
	return (
		<>
			<Header />
			<ScrollToTop />

			<main>
				<Outlet />
			</main>
		</>
	);
}
