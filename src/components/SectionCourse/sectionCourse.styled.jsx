import styled from "styled-components";

export const Item = styled.li`
	width: 100%;
	padding-left: 20px;
	display: flex;
	flex-direction: column;

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

export const TopItem = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	h3 {
		font-size: min(1.2rem, 6.5vw);
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		color: ${({ theme }) => theme.colors.text};

		a {
			color: inherit;
			font-weight: inherit;
			font-size: inherit;
			text-decoration: underline;
		}

		span {
			font-weight: ${({ theme }) => theme.fonts.fw.th};
			font-size: min(0.9rem, 4vw);
			text-transform: capitalize;
		}
	}
`;

export const DateItem = styled.div`
	span {
		margin-left: 5px;
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
		font-size: min(1rem, 4vw);
	}
`;

export const DescriptionItem = styled.p`
	padding: 12px 0;
	margin-bottom: 16px;
	font-size: min(1.1rem, 5vw);
	font-weight: ${({ theme }) => theme.fonts.fw.md};
`;
