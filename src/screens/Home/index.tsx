import React from 'react';
import {Keyboard, FlatList} from 'react-native';
import {Container} from './styles';
import Header from '../../components/Header';
import Counters from '../../components/Counters';
import EmptyList from '../../components/EmptyList';
import Task, {TaskProps} from '../../components/Task';

export default function Home() {
	const [task, setTask] = React.useState('');
	const [createdTasks, setCreatedTasks] = React.useState(0);
	const [doneTasks, setDoneTasks] = React.useState(0);
	const [taskList, setTaskList] = React.useState<TaskProps[]>([]);

	function addTask(task: string) {
		const currentTask = task.trim();
		if (currentTask.length > 0) {
			setTaskList(previousTasks => [...previousTasks, {name: task, status: 'created'}]);
			setTask('');
			Keyboard.dismiss();
		}
	}

	function removeTask(taskName: string) {
		taskList.forEach(task => {
			if (task.name === taskName) {
				if (task.status === 'done') {
					let currentDoneTasks = doneTasks;
					setDoneTasks(currentDoneTasks - 1);
				}
			}
		});
		const tasks = taskList.filter(task => task.name !== taskName);
		setTaskList(tasks);
	}

	function updateTask(taskName: string) {
		const tasks = taskList.map(task => {
			if (task.name === taskName) {
				let currentDoneTasks = doneTasks;
				setDoneTasks(task.status === 'created' ? currentDoneTasks + 1 : currentDoneTasks - 1);
				return {
					...task,
					status: task.status === 'done' ? 'created' : 'done',
				};
			}
			return task;
		});
		setTaskList(tasks as TaskProps[]);
	}

	React.useEffect(() => {
		function updateCounters() {
			setCreatedTasks(taskList.length);
		}

		updateCounters();
	}, [taskList]);

	return (
		<Container>
			<Header task={task} setTask={setTask} onAddTask={() => addTask(task)} />
			<Counters createdTasks={createdTasks} doneTasks={doneTasks} />
			<FlatList
				style={{
					padding: 24,
				}}
				data={taskList}
				keyExtractor={item => item.name}
				renderItem={({item}) => (
					<Task
						name={item.name}
						status={item.status}
						onUpdate={() => updateTask(item.name)}
						onRemove={() => removeTask(item.name)}
					/>
				)}
				ListEmptyComponent={() => <EmptyList />}
				contentContainerStyle={taskList.length === 0 && {flex: 1}}
			/>
		</Container>
	);
}
