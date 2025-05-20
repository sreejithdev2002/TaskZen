import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;