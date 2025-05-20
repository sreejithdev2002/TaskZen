import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
  const tasks = useSelector((state) => state.tasks);
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return (
    <div className="flex justify-between items-center bg-blue-50 border border-blue-100 p-4 rounded-xl mb-6">
      <div className="text-sm text-gray-700">Total: <span className="font-bold">{total}</span></div>
      <div className="text-sm text-green-700">Completed: <span className="font-bold">{completed}</span></div>
      <div className="text-sm text-yellow-600">Pending: <span className="font-bold">{pending}</span></div>
    </div>
  );
}

export default Dashboard;