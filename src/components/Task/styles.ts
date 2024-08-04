import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import trash from '../../assets/trash.png';
import check from '../../assets/check.png';

type TaskStyleProps = {
	style: 'created' | 'done';
};

export const Container = styled.View`
	width: 100%;
	flex-direction: row;
	gap: 8px;
	align-items: center;
	border-radius: 6px;
	padding: 12px;
	margin-bottom: 8px;
	background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const CheckBox = styled(TouchableOpacity)<TaskStyleProps>`
	width: 24px;
	height: 24px;
	border: 2px solid ${({theme}) => theme.COLORS.PURPLE};
	border-radius: 24px;
	background-color: ${({style, theme}) => (style === 'done' ? theme.COLORS.PURPLE : 'transparent')};
`;

export const CheckImage = styled.Image.attrs({
	source: check,
})`
	position: absolute;
	top: 7px;
	left: 5px;
`;

export const UpdateTaskButton = styled(TouchableOpacity)``;

export const TaskDescription = styled(Text)<TaskStyleProps>`
	flex: 1;
	font-family: ${({theme}) => theme.FONTS.REGULAR};
	color: ${({style, theme}) => (style === 'done' ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100)};
	text-decoration: ${({style}) => (style === 'done' ? 'line-through' : 'none')};
`;

export const RemoveTaskButton = styled(TouchableOpacity)``;

export const TrashImage = styled.Image.attrs({
	source: trash,
})``;
