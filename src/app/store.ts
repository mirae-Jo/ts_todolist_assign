import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/modules/todosSlice';
export const store = configureStore({
  reducer: { todoReducer }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
