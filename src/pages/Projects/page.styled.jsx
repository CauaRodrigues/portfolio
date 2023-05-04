import styled from "styled-components";

export const ProjectsContainer = styled.main`
	width: 100%;
	padding: 24px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	gap: 2.5rem;
`;

export const ProjectsTitle = styled.div`
	margin-top: 3rem;
	width: 95%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	gap: 1rem;

	text-align: center;

	@media (max-width: 850px) {
		margin-top: 1rem;
	}

	h1 {
		font-size: min(2.5rem, 10vw);
		font-family: ${({ theme }) => theme.fonts.fm.fira_code};
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
	}

	p {
		font-size: min(1.2rem, 5vw);
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		width: 40%;

		@media (max-width: 1000px) {
			width: 70%;
		}

		@media (max-width: 610px) {
			width: 90%;
		}
	}
`;

export const ProjectsSection = styled.section`
	max-width: 85%;
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	gap: 1.5rem;

	@media (max-width: 1150px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 740px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
