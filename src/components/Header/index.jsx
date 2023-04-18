import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import MenuMobile from "@components/MenuMobile";
import { ChangeThemeButton } from "@components/Buttons";
import Logo from "@styled/components/Logo";

import * as S from "./header.styled";

export default function Header() {
	return (
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

				<S.Buttons>
					<ChangeThemeButton />

					<button type="button">
						<BsSearch size={18} />
					</button>
				</S.Buttons>
			</MediaQuery>

			<MediaQuery maxWidth={549}>
				<MenuMobile />
			</MediaQuery>
		</S.Header>
	);
}
