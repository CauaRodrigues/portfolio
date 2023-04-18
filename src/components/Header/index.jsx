import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import { HandlerTheme } from "@components/HandlerTheme";
import Logo from "@styled/components/Logo";

import * as S from "./header.styled";

export default function Header() {
	return (
		<>
			<S.Header>
				<Logo />

				<MediaQuery minWidth={550}>
					<S.Menu>
						<ul>
							<S.Link>
								<Link to="/">Home</Link>
							</S.Link>

							<S.Link>
								<Link to="/about">Sobre</Link>
							</S.Link>

							<S.Link>
								<Link to="/projects">Projects</Link>
							</S.Link>

							<S.Link>
								<Link to="/setup">Setup</Link>
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
						<S.Link>
							<Link to="/">Home</Link>
						</S.Link>

						<S.Link>
							<Link to="/about">Sobre</Link>
						</S.Link>

						<S.Link>
							<Link to="/projects">Projects</Link>
						</S.Link>

						<S.Link>
							<Link to="/setup">Setup</Link>
						</S.Link>
					</ul>
				</S.MenuMobile>
			</MediaQuery>
		</>
	);
}
