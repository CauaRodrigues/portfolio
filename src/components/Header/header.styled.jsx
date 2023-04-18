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
		position: relative;
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-size: min(1rem, 5vw);
		color: ${({ theme }) => theme.colors.gray};

		&::before,
		&::after {
			content: " ";
			height: 1px;
			position: absolute;
			left: 0;
			right: 0;
			background-color: ${({ theme }) => theme.colors.gray};
			transform-origin: center right;
			transform: scaleX(0);
			transition: transform 0.5s ease-in-out;
		}

		&::before {
			top: 0;
		}

		&::after {
			bottom: 0;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.light};

			&::before,
			&:after {
				background-color: ${({ theme }) => theme.colors.light};
				transform-origin: center left;
				transform: scaleX(1);
			}
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
