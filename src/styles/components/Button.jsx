import styled from "styled-components";

export const StyledButton = styled.button`
	width: ${(props) => `${props.width}px` || "auto"};
	padding: 13px 18px;

	background-color: ${({ bgColor }) => bgColor || "transparent"};
	border: ${({ borderSize, color }) =>
		borderSize ? `${borderSize}px solid ${color}` : "none"};
	border-radius: 8px;

	color: ${({ color }) => color};
	font-weight: ${({ theme }) => theme.fonts.fw.sb};
	font-size: min(0.99rem, 5vw);
	transition: all 0.6s;
	cursor: pointer;

	a {
		color: inherit;
		font-weight: inherit;
		font-size: inherit;
	}

	&:hover {
		${({ hover, color, theme }) => {
			switch (hover) {
				case "invert":
					return `
            background-color: ${color};
            color: #0f121b;
            border-color: #0f121b;
          `;
				default:
					return "opacity: 0.75;";
			}
		}}
	}
`;
