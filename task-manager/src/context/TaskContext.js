import { createContext, useContext, useReducer } from 'react';
import { taskReducer } from '../reducer/taskReducer';

const TaskContext = createContext(null);

const initialState = {
  tasks: []
};

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }

  return context;
}
