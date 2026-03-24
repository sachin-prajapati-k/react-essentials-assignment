import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskSummary from './components/TaskSummary';

function App() {
  return (
    <div className="app-shell">
      <main className="task-container">
        <header className="task-header">
          <h1>Task Manager</h1>
          <p>Manage your day with Context API and useReducer.</p>
        </header>

        <TaskInput />
        <TaskSummary />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
