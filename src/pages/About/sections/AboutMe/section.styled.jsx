import styled from "styled-components";

export const SectionAbout = styled.section`
	width: 90%;
	padding: 24px 0;
	display: flex;
	justify-content: space-between;

	@media (max-width: 780px) {
		align-items: center;
		flex-direction: column;
		gap: 2.5rem;
	}
`;

export const TextContent = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;

	@media (max-width: 780px) {
		align-items: center;
		width: 90%;
		text-align: start;
	}

	@media (max-width: 500px) {
		width: 100%;
	}

	h1 {
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-family: ${({ theme }) => theme.fonts.fm.fira_code};
		letter-spacing: 2px;
		font-size: min(3rem, 8vw);

		@media (max-width: 780px) {
			br {
				display: none;
			}
		}
	}

	p {
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
		font-size: min(1.1rem, 5vw);
	}
`;

export const ImageContent = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	@media (max-width: 780px) {
		width: 100%;
	}
`;

export const Avatar = styled.figure`
	position: relative;
	align-self: center;
	width: max-content;
	z-index: 1;

	@media (max-width: 920px) {
		width: 100%;
	}

	@media (max-width: 780px) {
		width: max-content;
	}

	@media (max-width: 500px) {
		width: 100%;
	}

	&::after {
		content: " ";
		height: 100%;
		width: 100%;
		position: absolute;
		top: 30px;
		left: 30px;
		z-index: -1;
		background-color: transparent;
		border-radius: 31px;
		border: 4px solid ${({ theme }) => theme.colors.primary};

		@media (max-width: 500px) {
			display: none;
		}
	}

	img {
		position: relative;
		border-radius: 31px;
		transition: ease-in-out 0.8s;

		@media (max-width: 500px) {
			width: 100%;
		}

		&:hover {
			transform: translate(30px, 30px);

			@media (max-width: 500px) {
				transform: translate(0);
			}
		}
	}
`;

export const Contact = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	@media (max-width: 500px) {
		margin: 0;
	}
`;

export const SocialIcon = styled.figure`
	display: flex;
	align-items: center;
	gap: 12px;
	color: ${({ theme }) => theme.colors.light};

	figcaption {
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		font-size: min(1rem, 4.5vw);
	}
`;

export const Divider = styled.div`
	height: 2px;
	width: 80%;
	background-color: ${({ theme }) => theme.colors.light};
`;
