import {Container, Task, TaskContainer, Description, NumberWrapper, Number, Separator} from './styles';

type Props = {
	createdTasks: number;
	doneTasks: number;
};

export default function Counters({createdTasks, doneTasks}: Props) {
	return (
		<Container>
			<TaskContainer>
				<Task>
					<Description style='PRIMARY'>Criadas</Description>
					<NumberWrapper>
						<Number>{createdTasks}</Number>
					</NumberWrapper>
				</Task>
				<Task>
					<Description style='SECONDARY'>Concluídas</Description>
					<NumberWrapper>
						<Number>{doneTasks}</Number>
					</NumberWrapper>
				</Task>
			</TaskContainer>
			<Separator />
		</Container>
	);
}
