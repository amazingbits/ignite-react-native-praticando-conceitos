import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: ${({theme}) => theme.COLORS.GRAY_700};
	padding: 24px;
`;

export const LogoImage = styled.Image`
	height: 32px;
`;

export const Form = styled.View`
	width: 100%;
	transform: translateY(48px);
	flex-direction: row;
	gap: 4px;
`;
