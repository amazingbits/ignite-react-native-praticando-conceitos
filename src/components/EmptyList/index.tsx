import {Container, Image, Text, TextBold} from './styles';
import img from '../../assets/clipboard.png';

export default function EmptyList() {
	return (
		<Container>
			<Image source={img} />
			<TextBold>Você ainda não tem tarefas cadastradas</TextBold>
			<Text>Crie tarefas e organize seus itens a fazer</Text>
		</Container>
	);
}
