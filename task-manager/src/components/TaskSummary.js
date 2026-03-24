import { useTaskContext } from '../context/TaskContext';
import { TASK_ACTIONS } from '../reducer/taskReducer';

function TaskSummary() {
  const { state, dispatch } = useTaskContext();
  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter((task) => task.completed).length;

  return (
    <section className="task-summary">
      <div>
        <h3>Summary</h3>
        <p>
          Total: <strong>{totalTasks}</strong> | Completed:{' '}
          <strong>{completedTasks}</strong>
        </p>
      </div>

      <button
        type="button"
        className="clear-btn"
        onClick={() => dispatch({ type: TASK_ACTIONS.CLEAR_TASKS })}
        disabled={totalTasks === 0}
      >
        Clear All
      </button>
    </section>
  );
}

export default TaskSummary;
