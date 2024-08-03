import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.Image`
	width: 56px;
	height: 56px;
	margin-bottom: 16px;
`;

export const Text = styled.Text`
	font-family: ${({theme}) => theme.FONTS.REGULAR};
	color: ${({theme}) => theme.COLORS.GRAY_300};
	font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`;

export const TextBold = styled.Text`
	font-family: ${({theme}) => theme.FONTS.BOLD};
	color: ${({theme}) => theme.COLORS.GRAY_300};
	font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`;
