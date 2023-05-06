import styled from "styled-components";

export const SetupContainer = styled.main`
	width: 100%;
	padding: 24px 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2.5rem;

	.title--setup {
		margin-top: 5%;
		width: 80%;
		display: flex;

		h1 {
			width: 70%;
			font-size: min(2.5rem, 10vw);
			font-family: ${({ theme }) => theme.fonts.fm.fira_code};
			font-weight: ${({ theme }) => theme.fonts.fw.bd};

			@media (max-width: 950px) {
				width: 85%;
			}

			@media (max-width: 700px) {
				width: 100%;
			}
		}

		@media (max-width: 600px) {
			width: 90%;
		}
	}
`;

export const SetupSection = styled.section`
	width: 80%;

	@media (max-width: 880px) {
		width: 90%;
	}
`;

export const SetupList = styled.ul`
	width: 100%;
	padding-left: 12px;
	position: relative;

	display: flex;
	flex-direction: column;
	gap: 2.8rem;

	&::before {
		content: " ";
		width: 2px;
		height: 100%;
		position: absolute;
		left: 0;
		top: 8px;
		background-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const SetupType = styled.li`
	width: 100%;
	padding-left: 20px;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	&::before {
		content: " ";
		width: 15px;
		height: 15px;
		margin-top: 8px;
		position: absolute;
		left: -7px;
		z-index: 10;

		background-color: ${({ theme }) => theme.colors.main};
		outline: 2px solid ${({ theme }) => theme.colors.primary};
		border-radius: 50%;
	}
`;

export const SetupTypeContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;

	@media (max-width: 740px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const SetupUses = styled.div`
	width: 100%;
	padding: 12px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	gap: 0.5rem;

	border: 1.5px solid rgba(255, 255, 255, 0.19);
	background-color: transparent;

	h3 {
		color: ${({ theme }) => theme.colors.light};
		font-size: min(1.3rem, 8vw);
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
	}

	p {
		color: ${({ theme }) => theme.colors.gray};
		font-size: min(0.95rem, 4.6vw);
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
	}

	.details {
		position: relative;
		z-index: 1;

		display: flex;
		justify-content: space-around;
		align-items: center;

		font-size: min(1rem, 5vw);
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		color: ${({ theme }) => theme.colors.primary_light};

		&::before {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: -0.25em;
			right: 0;
			z-index: -1;

			background-color: ${({ theme }) => theme.colors.hover_link};
			transform-origin: center left;
			transform: scaleX(0.2);
			transition: transform 0.5s ease-in-out;
		}

		&:hover::before {
			transform: scaleX(1);
			transform-origin: center left;
		}
	}
`;
