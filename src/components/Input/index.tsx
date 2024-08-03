import {TextInput, Wrapper} from './styles';
import {TextInputProps} from 'react-native';

type Props = TextInputProps & {
	value: string;
};

export default function Input({value, ...rest}: Props) {
	return (
		<Wrapper>
			<TextInput value={value} {...rest} />
		</Wrapper>
	);
}
