import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    addTask(state, action) {
      const taskText = action.payload?.trim();
      if (!taskText) {
        return;
      }
      state.tasks.push({
        id: Date.now(),
        text: taskText,
      });
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
