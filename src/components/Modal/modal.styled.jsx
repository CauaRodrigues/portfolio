import styled from "styled-components";

export const ModalWrapper = styled.main`
	flex: 1;
	width: 100%;
	height: 100vh;
	z-index: 9;
	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(0, 0, 0, 0.644);
`;

export const ModalBox = styled.div`
	width: 40%;
	height: 60vh;
	padding: 16px;
	z-index: 10;

	background-color: rgba(59, 66, 87, 0.192);
	border-radius: 12px;
	backdrop-filter: blur(18px);
`;

export const HeaderModal = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	input {
		flex: 1;
		background-color: transparent;
		border: none;
		color: ${({ theme }) => theme.colors.light};
		font-size: min(0.9rem, 6vw);
		font-weight: ${({ theme }) => theme.fonts.fw.md};

		&:focus {
			outline: none;
		}
	}

	button {
		background-color: transparent;
		cursor: pointer;
		color: ${({ theme }) => theme.colors.light};
		transition: all 0.5s;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const ContentModal = styled.section`
	width: 100%;
	height: 95%;
	overflow-y: scroll;

	/* width scroll */
	&::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	&::-webkit-scrollbar-track {
		border: 0.2px solid rgba(107, 107, 107, 0.39);
		border-radius: 10px;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.primary_light};
		border-radius: 10px;

		&:hover {
			background: ${({ theme }) => theme.colors.primary};
		}
	}

	h2 {
		margin: 16px 0 16px 0;
		color: ${({ theme }) => theme.colors.primary};
		font-size: min(1rem, 8vw);
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
	}

	ul {
		padding-bottom: 24px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 0.6rem;

		&:last-of-type {
			border: 0;
		}

		a,
		button {
			color: ${({ theme }) => theme.colors.gray};
			background-color: transparent;
			cursor: pointer;

			&:hover {
				color: ${({ theme }) => theme.colors.light};
			}
		}

		li {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.6rem;

			span {
				font-weight: ${({ theme }) => theme.fonts.fw.md};
				font-size: 1rem;
			}
		}
	}
`;
