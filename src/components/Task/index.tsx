import {Container, CheckBox, CheckImage, TaskDescription, RemoveTaskButton, TrashImage} from './styles';

export type TaskProps = {
	name: string;
	status: 'created' | 'done';
};

type Props = TaskProps & {
	onRemove: (taskName: string) => void;
	onUpdate: (taskName: string) => void;
};

export default function Task({name, status, onRemove, onUpdate}: Props) {
	return (
		<Container>
			<CheckBox style={status} onPress={() => onUpdate(name)}>
				{status === 'done' && <CheckImage />}
			</CheckBox>
			<TaskDescription style={status}>{name}</TaskDescription>
			<RemoveTaskButton onPress={() => onRemove(name)}>
				<TrashImage />
			</RemoveTaskButton>
		</Container>
	);
}
