import styled from "styled-components";

export const Section = styled.section`
	width: 100%;
	min-height: 90vh;
	padding: 24px;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media (max-width: 1218px) {
		justify-content: space-between;
	}

	@media (max-width: 1000px) {
		justify-content: space-around;
		flex-direction: column;
		gap: 2rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	@media (max-width: 830px) {
		align-items: center;
		text-align: center;
	}

	.welcome {
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		font-size: min(2rem, 7vw);
	}

	h1 {
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-family: ${({ theme }) => theme.fonts.fm.fira_code};
		font-size: min(4.5rem, 14vw);
	}

	.occupation {
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
		font-size: min(1.2rem, 6vw);
	}

	p {
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		font-size: min(1rem, 6vw);
	}
`;

export const GroupButtons = styled.div`
	width: max-content;
	margin-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.7rem;
`;

export const Code = styled.div`
	padding: 16px;
	width: max-content;
	background-color: #0f121b;
	border: 3px solid #4a4f76;
	border-radius: 23px;

	@media (max-width: 510px) {
		width: 100%;
	}

	pre,
	span {
		font-family: ${({ theme }) => theme.fonts.fm.fira_code};
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
		font-size: min(0.9rem, 3vw);
	}

	pre {
		display: flex;
		flex-wrap: wrap;
	}

	.pink {
		color: #e36cb8;
	}
	.blue {
		color: #44b2db;
	}
	.purple {
		color: #be8bf8;
	}
	.yellow {
		color: #dee164;
	}
	.white {
		color: #cecfdd;
	}
	.green {
		color: #52d261;
	}
	.line {
		color: #4a4f76;
		font-weight: ${({ theme }) => theme.fonts.fw.md};
	}
`;
