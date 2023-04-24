import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Logo() {
	return (
		<Link to="/">
			<StyledLogo src="/assets/profile.png" alt="foto de cauã" />
		</Link>
	);
}

const StyledLogo = styled.img`
	width: 62px;
	border: 3px solid ${({ theme }) => theme.colors.main};
	border-radius: 50%;
	transition: all 0.7s;

	&:hover {
		border-color: ${({ theme }) => theme.colors.primary};
	}
`;
