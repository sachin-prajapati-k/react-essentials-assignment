import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { TASK_ACTIONS } from '../reducer/taskReducer';

function TaskInput() {
  const [taskTitle, setTaskTitle] = useState('');
  const { dispatch } = useTaskContext();

  const addTask = (event) => {
    event.preventDefault();

    dispatch({
      type: TASK_ACTIONS.ADD_TASK,
      payload: { title: taskTitle }
    });

    setTaskTitle('');
  };

  return (
    <form className="task-input-form" onSubmit={addTask}>
      <input
        type="text"
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
        placeholder="Enter a task..."
        aria-label="Task title"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
