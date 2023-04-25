import React from "react";
import { Link, useMatches } from "react-router-dom";
import MediaQuery from "react-responsive";
import { BsSearch } from "react-icons/bs";

import { HandlerTheme } from "@components/HandlerTheme";
import Logo from "@styled/components/Logo";

import * as S from "./header.styled";

export default function Header() {
	const [, { pathname }] = useMatches();
	console.log(pathname);

	return (
		<>
			<S.Header>
				<Logo />

				<MediaQuery minWidth={550}>
					<S.Menu>
						<ul>
							<S.Link active={pathname === "/"}>
								<Link to="/">Home</Link>
							</S.Link>

							<S.Link active={pathname === "/about"}>
								<Link to="/about">Sobre</Link>
							</S.Link>

							<S.Link active={pathname === "/projects"}>
								<Link to="/projects">Projects</Link>
							</S.Link>

							<S.Link active={pathname === "/setup"}>
								<Link to="/setup">Setup</Link>
							</S.Link>

							<S.Link active={pathname === "/events"}>
								<Link to="/events">Eventos</Link>
							</S.Link>
						</ul>
					</S.Menu>
				</MediaQuery>

				<S.Buttons>
					<HandlerTheme />

					<button type="button">
						<BsSearch size={18} />
					</button>
				</S.Buttons>
			</S.Header>

			<MediaQuery maxWidth={549}>
				<S.MenuMobile noHeader>
					<ul>
						<S.Link active={pathname === "/"}>
							<Link to="/">Home</Link>
						</S.Link>

						<S.Link active={pathname === "/about"}>
							<Link to="/about">Sobre</Link>
						</S.Link>

						<S.Link active={pathname === "/projects"}>
							<Link to="/projects">Projects</Link>
						</S.Link>

						<S.Link active={pathname === "/setup"}>
							<Link to="/setup">Setup</Link>
						</S.Link>

						<S.Link active={pathname === "/events"}>
							<Link to="/events">Eventos</Link>
						</S.Link>
					</ul>
				</S.MenuMobile>
			</MediaQuery>
		</>
	);
}
