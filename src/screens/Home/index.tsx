import React from 'react';
import {Keyboard, FlatList, View, Text} from 'react-native';
import {Container} from './styles';
import Header from '../../components/Header';
import Counters from '../../components/Counters';
import EmptyList from '../../components/EmptyList';

type TaskProps = {
	name: string;
	status: 'created' | 'done';
};

export default function Home() {
	const [task, setTask] = React.useState('');
	const [createdTasks, setCreatedTasks] = React.useState(0);
	const [doneTasks, setDoneTasks] = React.useState(0);
	const [taskList, setTaskList] = React.useState<TaskProps[]>([]);

	function handleAddTask(taskName: string) {
		const task = taskName.trim();
		if (task.length > 0) {
			setTaskList([
				...taskList,
				{
					name: task,
					status: 'created',
				},
			]);
		}
		setTask('');
		setCreatedTasks(taskList.length);
		Keyboard.dismiss();
	}

	function handleRemoveTask() {
		console.log('Tarefa excluída');
	}

	function handleUpdateTask() {
		console.log('Tarefa alterada');
	}

	return (
		<Container>
			<Header task={task} setTask={setTask} onAddTask={handleAddTask} />
			<Counters createdTasks={createdTasks} doneTasks={doneTasks} />
			<FlatList
				data={taskList}
				keyExtractor={item => item.name}
				renderItem={({item}) => (
					<View>
						<Text>{item.name}</Text>
					</View>
				)}
				ListEmptyComponent={() => <EmptyList />}
				contentContainerStyle={taskList.length === 0 && {flex: 1}}
			/>
		</Container>
	);
}
