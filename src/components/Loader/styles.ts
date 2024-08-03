import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({theme}) => theme.COLORS.GRAY_600};
	justify-content: center;
	align-items: center;
`;

export const CircleLoader = styled(ActivityIndicator).attrs(({theme}) => ({
	color: theme.COLORS.BLUE,
}))``;
