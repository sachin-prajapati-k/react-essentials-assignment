import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { TASK_ACTIONS } from '../reducer/taskReducer';

function TaskItem({ task }) {
  const { dispatch } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const saveEdit = () => {
    dispatch({
      type: TASK_ACTIONS.EDIT_TASK,
      payload: { id: task.id, title: editedTitle }
    });
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            dispatch({
              type: TASK_ACTIONS.TOGGLE_TASK,
              payload: { id: task.id }
            })
          }
        />

        {isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
          />
        ) : (
          <span>{task.title}</span>
        )}
      </label>

      <div className="task-actions">
        {isEditing ? (
          <button type="button" onClick={saveEdit}>
            Save
          </button>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        <button
          type="button"
          className="danger-btn"
          onClick={() =>
            dispatch({
              type: TASK_ACTIONS.DELETE_TASK,
              payload: { id: task.id }
            })
          }
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
