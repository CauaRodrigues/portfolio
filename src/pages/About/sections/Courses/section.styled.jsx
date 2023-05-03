import styled from "styled-components";

export const CoursesSection = styled.section`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		align-self: flex-start;
		font-size: min(2.3rem, 8vw);
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-family: ${({ theme }) => theme.fonts.fm.fira_code};
		margin: 1rem 0;
	}
`;

export const List = styled.ul`
	width: 100%;
	position: relative;

	&::before {
		content: " ";
		width: 1px;
		height: 100%;
		position: absolute;
		left: 0;
		top: 8px;
		background-color: ${({ theme }) => theme.colors.primary};
	}
`;

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
