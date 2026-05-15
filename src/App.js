
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './taskSlice';
import './App.css';

function App() {
  const [taskText, setTaskText] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = taskText.trim();
    if (!trimmedText) {
      return;
    }
    dispatch(addTask(trimmedText));
    setTaskText('');
  };

  return (
    <div className="App">
      <main className="task-manager">
        <h1>Simple Task Manager</h1>

        <form className="task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            placeholder="Enter a task"
            aria-label="Task"
          />
          <button type="submit">Add Task</button>
        </form>

        {tasks.length === 0 ? (
          <p>Wala pang task, maglagay ng task sa taas.</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id}>{task.text}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
