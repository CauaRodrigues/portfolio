import styled from "styled-components";

export const ContactSection = styled.section`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContactTitle = styled.div`
	width: max-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: ${({ theme }) => theme.colors.main};

	h2 {
		font-size: min(2.6rem, 8vw);
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
	}

	p {
		width: 80%;
		font-size: min(1.2rem, 5vw);
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
	}
`;

export const Form = styled.form`
	width: 60%;
	min-height: 50vh;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	gap: 1.3rem;

	.form__group-fields {
		width: 100%;
		display: flex;
		gap: 1rem;
	}
`;

export const FormGroup = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column-reverse;
`;

export const FormField = styled.input`
	width: 100%;
	padding: 8px;
	margin-top: 7px;

	background: transparent;
	border: 2px solid ${({ theme }) => theme.colors.gray_dark};
	border-radius: 8px;
	outline: none;

	font-size: min(1rem, 6vw);
	font-weight: ${({ theme }) => theme.fonts.fw.sb};
	color: ${({ theme }) => theme.colors.light};

	&:valid,
	&:focus {
		& ~ .form__label {
			color: ${({ theme }) => theme.colors.light};
			font-weight: ${({ theme }) => theme.fonts.fw.bd};
		}

		border-width: 3px;
		border-color: ${({ theme }) => theme.colors.light};
	}
`;

export const FormLabel = styled.label`
	color: ${({ theme }) => theme.colors.gray_dark};
	font-weight: ${({ theme }) => theme.fonts.fw.sb};
`;

export const FormGroupMessage = styled(FormGroup)`
	flex: 1;
`;

export const FormMessage = styled(FormField)`
	flex: 1;
	padding: 12px;
	resize: none;
`;

export const SocialMedias = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const Divider = styled.div`
	height: 2px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.main};
`;

export const LinksIcons = styled.div`
	display: flex;
	gap: 0.7rem;

	a {
		color: ${({ theme }) => theme.colors.light};
		transition: ease-in-out 1s;

		&:hover {
			color: ${({ theme }) => theme.colors.primary_dark};
		}
	}
`;
