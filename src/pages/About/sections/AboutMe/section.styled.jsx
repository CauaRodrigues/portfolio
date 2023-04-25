import styled from "styled-components";

export const SectionAbout = styled.section`
	width: 100%;
	padding: 24px 12px;
	display: flex;
	justify-content: space-around;

	@media (max-width: 780px) {
		align-items: center;
		flex-direction: column;
		gap: 2.5rem;
	}
`;

export const TextContent = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;

	@media (max-width: 920px) {
		width: 50%;
	}

	@media (max-width: 780px) {
		align-items: center;
		width: 90%;
		text-align: start;
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
	width: 30%;
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
`;

export const SocialIcon = styled.figure`
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;

	figcaption {
		font-weight: ${({ theme }) => theme.fonts.fw.md};
	}

	img {
		width: 26px;
	}
`;

export const Divider = styled.div`
	height: 2px;
	width: 80%;
	background-color: ${({ theme }) => theme.colors.light};
`;
