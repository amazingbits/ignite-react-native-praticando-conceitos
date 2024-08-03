import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity).attrs(({theme}) => ({
	activeOpacity: 0.7,
}))`
	width: 56px;
	height: 56px;
	background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	justify-items: center;
`;

export const Text = styled.Text`
	color: ${({theme}) => theme.COLORS.GRAY_100};
	font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
	font-family: ${({theme}) => theme.FONTS.BOLD};
`;
