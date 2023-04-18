import styled from "styled-components";

export const Section = styled.section`
	width: 100%;
	min-height: 90vh;
	padding: 24px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	.welcome {
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		font-size: min(2rem, 7vw);
	}

	h1 {
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-family: ${({ theme }) => theme.fonts.fm.fira_code};
		font-size: min(4.5rem, 18vw);
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
	padding: 24px;
	width: max-content;
	background-color: #0f121b;
	border: 3px solid #4a4f76;
	border-radius: 23px;

	pre,
	span {
		font-family: ${({ theme }) => theme.fonts.fm.fira_code};
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
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
