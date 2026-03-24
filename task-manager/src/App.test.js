import { render, screen } from '@testing-library/react';
import App from './App';
import { TaskProvider } from './context/TaskContext';

test('renders task manager heading', () => {
  render(
    <TaskProvider>
      <App />
    </TaskProvider>
  );

  expect(screen.getByText(/task manager/i)).toBeInTheDocument();
});
