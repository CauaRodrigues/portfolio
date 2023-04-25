import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	padding: 12px;

	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.6rem;
	background-color: ${({ theme }) => theme.colors.blur};

	@media (max-width: 620px) {
		justify-content: space-between;
	}
`;

export const Menu = styled.nav`
	width: max-content;

	ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 0.8rem;
	}
`;

export const MenuMobile = styled(Menu)`
	width: 100%;
	min-height: 7vh;
	padding: 25px 16px;
	margin-bottom: 1rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.2rem;

	background-color: ${({ theme }) => theme.colors.blur};
	border-top: 2px solid ${({ theme }) => theme.colors.main};
	overflow-x: scroll;
`;

export const NavLink = styled.li`
	a {
		padding: 8px 10px;

		color: ${({ theme }) => theme.colors.gray};
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
		font-size: min(1rem, 5vw);

		border-radius: 8px;
		transition: all 0.6s;

		&:hover {
			color: ${({ theme }) => theme.colors.light};
			background-color: ${({ theme }) => theme.colors.blur};
		}

		${(props) => {
			if (props.active) {
				return `
					color: ${props.theme.colors.light};
					background-color: ${props.theme.colors.blur};
				`;
			}
		}}
	}
`;

export const Button = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.text};
	cursor: pointer;
`;
