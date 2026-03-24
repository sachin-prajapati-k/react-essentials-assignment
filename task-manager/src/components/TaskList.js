import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { state } = useTaskContext();

  if (state.tasks.length === 0) {
    return <p className="empty-state">No tasks yet. Add your first task.</p>;
  }

  return (
    <ul className="task-list">
      {state.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
