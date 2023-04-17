import React from "react";
import styled from "styled-components";

export default function Logo() {
	return <StyledLogo className="gradient_text">Cauã</StyledLogo>;
}

const StyledLogo = styled.div`
	font-family: ${({ theme }) => theme.fonts.fm.fira_code};
	font-size: min(2.3rem, 6vw);
	font-weight: ${({ theme }) => theme.fonts.fw.bd};
`;
