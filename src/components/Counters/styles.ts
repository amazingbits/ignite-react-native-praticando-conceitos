import {Text} from 'react-native';
import styled from 'styled-components/native';

type TaskCounterStyleProps = {
	style: 'PRIMARY' | 'SECONDARY';
};

export const Container = styled.View`
	margin-top: 32px;
	padding: 24px;
`;

export const TaskContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const Task = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 4px;
`;

export const Description = styled(Text)<TaskCounterStyleProps>`
	color: ${({theme, style}) => (style === 'PRIMARY' ? theme.COLORS.BLUE : theme.COLORS.PURPLE)};
	font-family: ${({theme}) => theme.FONTS.BOLD};
	font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`;

export const NumberWrapper = styled.View`
	padding: 2px 8px;
	border-radius: 10px;
	background-color: ${({theme}) => theme.COLORS.GRAY_400};
`;

export const Number = styled.Text`
	color: ${({theme}) => theme.COLORS.GRAY_100};
	font-family: ${({theme}) => theme.FONTS.BOLD};
	font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`;

export const Separator = styled.View`
	margin-top: 20px;
	width: 100%;
	height: 0.4px;
	background-color: ${({theme}) => theme.COLORS.GRAY_400};
`;
