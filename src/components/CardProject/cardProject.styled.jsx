import styled from "styled-components";

export const BoxProject = styled.div`
	width: 100%;
	padding: 16px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.7rem;

	background-color: ${({ theme }) => theme.colors.black_light};
	border-radius: 14px;
`;

export const TopProject = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TopIconsLink = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	a {
		height: min-content;
		width: min-content;
		color: ${({ theme }) => theme.colors.light};
		transition: color 0.45s;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const BoxAboutProject = styled.div`
	width: 100%;

	h3 {
		font-size: min(1.8rem, 8vw);
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		text-transform: capitalize;
		margin-bottom: 5px;
	}

	p {
		font-size: min(1.1rem, 5vw);
		font-weight: ${({ theme }) => theme.fonts.fw.md};
	}
`;

export const ListTechs = styled.ul`
	margin-top: 12px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 0.4rem;
`;

export const Tech = styled.li`
	padding: 5px 12px;

	border: 2.5px solid ${({ theme }) => theme.colors.gray};
	border-radius: 7px;

	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.light};
	font-size: min(1rem, 6vw);
	font-weight: ${({ theme }) => theme.fonts.fw.sb};
`;
