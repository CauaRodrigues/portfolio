import styled from "styled-components";

export const ChangeThemeButton = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.light};
	cursor: pointer;
`;
