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
			font-size: min(2.5rem, 8vw);
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

	@media (max-width: 600px) {
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
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
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

	p {
		color: ${({ theme }) => theme.colors.gray};
		font-size: 0.95rem;
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
	}
`;
