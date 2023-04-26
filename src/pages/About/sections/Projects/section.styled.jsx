import styled from "styled-components";

export const ProjectsSection = styled.section`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h2 {
		align-self: flex-start;
		font-size: min(2.3rem, 8vw);
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-family: ${({ theme }) => theme.fonts.fm.fira_code};
		margin: 1rem 0;
	}

	button {
		align-self: center;
	}
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

export const Project = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: right;
	gap: 1rem;

	&:nth-child(2n) {
		flex-direction: row-reverse;
		text-align: left;

		.align-group {
			align-self: flex-start;
		}
	}

	img.project-image {
		width: 100%;
		border-radius: 21px;
		opacity: 0.5;
		transition: all 1s;
		box-shadow: 5px 5px 16px ${({ theme }) => theme.colors.black};

		&:hover {
			opacity: 1;
			transform: scale(1.06);
		}
	}

	.align-group {
		align-self: flex-end;
	}
`;

export const InfosProject = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	z-index: 1;

	h3 {
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-size: min(1.9rem, 6.5vw);
		text-decoration: underline;
	}

	span.aplication-type {
		font-size: min(1.15rem, 6.5vw);
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
	}
`;

export const BoxDescription = styled.div`
	padding: 18px;
	align-self: ${(props) => `flex-${props.align}`};

	background-color: ${({ theme }) => theme.colors.primary_dark};
	border-radius: 8px;

	font-size: min(1.05rem, 6vw);
	font-weight: ${({ theme }) => theme.fonts.fw.md};
`;

export const Technologies = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;

	span {
		font-size: min(1rem, 4vw);
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
	}
`;

export const GroupLink = styled.div`
	display: flex;
	gap: 1rem;
`;
