export const TASK_ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  DELETE_TASK: 'DELETE_TASK',
  CLEAR_TASKS: 'CLEAR_TASKS'
};

export function taskReducer(state, action) {
  switch (action.type) {
    case TASK_ACTIONS.ADD_TASK: {
      const title = action.payload.title.trim();
      if (!title) return state;

      const newTask = {
        id: Date.now(),
        title,
        completed: false
      };

      return {
        ...state,
        tasks: [newTask, ...state.tasks]
      };
    }

    case TASK_ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        )
      };

    case TASK_ACTIONS.EDIT_TASK: {
      const updatedTitle = action.payload.title.trim();
      if (!updatedTitle) return state;

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: updatedTitle }
            : task
        )
      };
    }

    case TASK_ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id)
      };

    case TASK_ACTIONS.CLEAR_TASKS:
      return {
        ...state,
        tasks: []
      };

    default:
      return state;
  }
}
