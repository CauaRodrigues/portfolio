import styled from "styled-components";

export const ProjectsSection = styled.section`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	h2 {
		align-self: flex-start;
		font-size: min(2.3rem, 8vw);
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-family: ${({ theme }) => theme.fonts.fm.fira_code};
		margin: 3rem 0;
	}

	a {
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

	@media (max-width: 820px) {
		flex-direction: column;
	}

	&:nth-child(2n) {
		flex-direction: row-reverse;
		text-align: left;

		@media (max-width: 820px) {
			flex-direction: column;
		}

		.align-group {
			align-self: flex-start;

			@media (max-width: 820px) {
				align-self: center;
			}
		}
	}

	img.project-image {
		width: 50%;
		border-radius: 21px;
		opacity: 0.5;
		transition: all 1s;
		box-shadow: 5px 5px 16px ${({ theme }) => theme.colors.black};

		@media (max-width: 820px) {
			width: 80%;
		}

		@media (max-width: 500px) {
			width: 100%;
		}

		&:hover {
			opacity: 1;
			transform: scale(1.06);
		}
	}

	.align-group {
		align-self: flex-end;

		@media (max-width: 820px) {
			align-self: center;
		}
	}
`;

export const InfosProject = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	z-index: 1;

	@media (max-width: 820px) {
		width: 80%;
		text-align: center;
		align-items: center;
	}

	@media (max-width: 500px) {
		width: 100%;
	}

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

	@media (max-width: 820px) {
		text-align: center;
		align-items: center;
		justify-content: center;
	}

	span {
		font-size: min(1rem, 4vw);
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
	}
`;

export const GroupLink = styled.div`
	display: flex;
	gap: 1rem;

	a {
		color: ${({ theme }) => theme.colors.light};
		transition: color 0.45s;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
