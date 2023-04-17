import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	padding: 12px;

	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.6rem;

	background: rgba(74, 60, 118, 0.07);
	backdrop-filter: blur(10px);
`;

export const Menu = styled.nav`
	width: 26%;

	ul {
		display: flex;
		justify-content: space-between;
		gap: 0.8rem;
	}
`;

export const Link = styled.li`
	a {
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
		font-size: min(1rem, 5vw);
		color: ${({ theme }) => theme.colors.dark.light};
	}
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	button {
		background-color: transparent;
		color: ${({ theme }) => theme.colors.dark.light};
		cursor: pointer;
	}
`;
