import React from 'react';
import {Container, LogoImage, Form} from './styles';
import img from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

type Props = {
	task: string;
	setTask: React.Dispatch<React.SetStateAction<string>>;
	onAddTask: (taskName: string) => void;
};

export default function Header({task, setTask, onAddTask}: Props) {
	return (
		<Container>
			<LogoImage source={img} />
			<Form>
				<Input value={task} onChangeText={setTask} placeholder='Adicione uma nova tarefa' autoCorrect={false} />
				<Button value='+' onPress={() => onAddTask(task)} />
			</Form>
		</Container>
	);
}
