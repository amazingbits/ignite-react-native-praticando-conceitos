import styled from 'styled-components/native';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

export const TextInput = styled.TextInput.attrs(({theme}) => ({
	placeholderTextColor: theme.COLORS.GRAY_300,
}))`
	background-color: ${({theme}) => theme.COLORS.GRAY_500};
	border-radius: 8px;
	padding: 16px;
	font-family: ${({theme}) => theme.FONTS.REGULAR};
	font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
	color: ${({theme}) => theme.COLORS.GRAY_100};
	flex: 1;
`;

export const Wrapper = styled(TouchableWithoutFeedback).attrs({
	onPress: () => Keyboard.dismiss(),
})``;
