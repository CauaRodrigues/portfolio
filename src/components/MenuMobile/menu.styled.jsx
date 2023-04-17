import styled from "styled-components";

export const MenuMobile = styled.button`
	width: 30px;
	height: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: transparent;

	div {
		width: 100%;
		padding: 1px;
		background-color: ${({ theme }) => theme.colors.dark.light};
	}
`;
