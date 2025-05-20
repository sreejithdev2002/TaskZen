import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTask, deleteTask } from '../features/tasks/taskSlice';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-xl hover:shadow"
        >
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.completed ? (
              <CheckCircle className="text-green-500" />
            ) : (
              <Circle className="text-gray-400" />
            )}
            <span
              className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
            >
              {task.text}
            </span>
          </div>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-red-500 hover:text-red-700 transition"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;