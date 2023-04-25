import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	padding: 12px;

	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.6rem;
	background-color: ${({ theme }) => theme.colors.blur};

	@media (max-width: 550px) {
		justify-content: space-between;
	}
`;

export const Menu = styled.nav`
	width: 26%;

	@media (max-width: 928px) {
		width: 45%;
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 0.8rem;
	}
`;

export const MenuMobile = styled(Menu)`
	border-top: 2px solid ${({ theme }) => theme.colors.main};
	width: 100%;
	min-height: 7vh;
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.blur};

	ul {
		justify-content: space-around;
	}
`;

export const Link = styled.li`
	a {
		padding: 8px 10px;
		position: relative;
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
		font-size: min(1rem, 5vw);
		color: ${({ theme }) => theme.colors.gray};
		border-radius: 8px;
		transition: all 0.6s;

		&:hover {
			color: ${({ theme }) =>
				theme.colors.name === "dark" ? theme.colors.light : theme.colors.black};
			background-color: ${({ theme }) =>
				theme.colors.name === "dark" ? theme.colors.blur : theme.colors.hover};
		}
	}
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	button {
		background-color: transparent;
		color: ${({ theme }) => theme.colors.text};
		cursor: pointer;
	}
`;
