import {TouchableOpacityProps} from 'react-native';
import {Container, Text} from './styles';

type Props = TouchableOpacityProps & {
	value: string;
};

export default function Button({value, ...rest}: Props) {
	return (
		<Container {...rest}>
			<Text>+</Text>
		</Container>
	);
}
