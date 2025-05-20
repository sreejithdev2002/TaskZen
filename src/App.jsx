import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TaskForm from './components/Taskform';
import TaskList from './components/Tasklist';
import Dashboard from './components/Dashboard';

function App() {
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold text-center mt-8 mb-2 text-blue-800">TaskZen</h1>
        <p className='text-center mb-8 text-blue-600'>Master your day, one task at a time.</p>
        <div className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
          <Dashboard />
          <TaskForm />
          <TaskList />
        </div>
      </div>
      <footer className="text-center py-6 text-sm text-gray-500">
        Built with ❤️ by <span className="font-semibold">SreejithDev2002</span>
      </footer>
    </div>
  );
}

export default App;