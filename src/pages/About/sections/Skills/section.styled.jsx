import styled from "styled-components";

export const SkillsSection = styled.section`
	margin: 16px 0;
	padding: 36px 12px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	justify-content: center;

	.content {
		width: 60%;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 24px 15px;

		@media (max-width: 600px) {
			width: 80%;
		}

		img {
			width: 70%;

			@media (max-width: 870px) {
				width: 90%;
			}
		}
	}
`;
