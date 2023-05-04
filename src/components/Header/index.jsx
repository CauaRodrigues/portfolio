import React from "react";
import { Link, useMatches } from "react-router-dom";
import MediaQuery from "react-responsive";
import { BsSearch } from "react-icons/bs";

import Logo from "@styled/components/Logo";

import * as S from "./header.styled";

export default function Header() {
	const [, { pathname }] = useMatches();

	return (
		<>
			<S.Header>
				<Logo />

				<MediaQuery minWidth={620}>
					<S.Menu>
						<ul>
							<S.NavLink active={pathname === "/"}>
								<Link to="/">Home</Link>
							</S.NavLink>

							<S.NavLink active={pathname === "/about"}>
								<Link to="/about">Sobre</Link>
							</S.NavLink>

							<S.NavLink active={pathname === "/projects"}>
								<Link to="/projects">Projetos</Link>
							</S.NavLink>

							<S.NavLink active={pathname === "/setup"}>
								<Link to="/setup">Setup</Link>
							</S.NavLink>

							<S.NavLink active={pathname === "/events"}>
								<Link to="/events">Eventos</Link>
							</S.NavLink>
						</ul>
					</S.Menu>
				</MediaQuery>

				<S.Button>
					<BsSearch size={22} />
				</S.Button>
			</S.Header>

			<MediaQuery maxWidth={619}>
				<S.MenuMobile noHeader>
					<S.NavLink active={pathname === "/"}>
						<Link to="/">Home</Link>
					</S.NavLink>

					<S.NavLink active={pathname === "/about"}>
						<Link to="/about">Sobre</Link>
					</S.NavLink>

					<S.NavLink active={pathname === "/projects"}>
						<Link to="/projects">Projects</Link>
					</S.NavLink>

					<S.NavLink active={pathname === "/setup"}>
						<Link to="/setup">Setup</Link>
					</S.NavLink>

					<S.NavLink active={pathname === "/events"}>
						<Link to="/events">Eventos</Link>
					</S.NavLink>
				</S.MenuMobile>
			</MediaQuery>
		</>
	);
}
