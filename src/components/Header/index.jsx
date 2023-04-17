import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsSunFill } from "react-icons/bs";

import Logo from "@styled/components/Logo";
import * as S from "./header.styled";

export default function Header() {
	return (
		<S.Header>
			<Logo />

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
				<button type="button">
					<BsSunFill size={24} />
				</button>

				<button type="button">
					<BsSearch size={18} />
				</button>
			</S.Buttons>
		</S.Header>
	);
}
