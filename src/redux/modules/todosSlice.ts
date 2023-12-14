import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { EIsDone, TTodo } from '../../types/types';

interface ToDosState {
  todos: TTodo[];
}
const initialState: ToDosState = {
  todos: []
};

export const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);

      // setToDos((prev) => [newToDo, ...prev!]);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // setToDos((prev) => {
      //   return prev.filter((todo) => {
      //     return todo.id !== id;
      //   });
      // });
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        return todo.id === action.payload ? { ...todo, isDone: !todo.isDone ? EIsDone.DONE : EIsDone.UN_DONE } : todo;
      });
      // setToDos((prev) => {
      //   // map 함수의 결과를 반환
      //   return prev.map((todo) => {
      //     return todo.id === id ? { ...todo, isDone: !todo.isDone ? EIsDone.DONE : EIsDone.UN_DONE } : todo;
      //   });
      // });
    }
  }
});

export const { addTodo, deleteTodo, updateTodo } = toDoSlice.actions;

export const todos = (state: RootState) => state.todoReducer;

export default toDoSlice.reducer;
