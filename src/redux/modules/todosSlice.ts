import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { EIsDone, TTodo } from '../../types/types';
import axios from 'axios';

interface ToDosState {
  todos: TTodo[];
}
const initialState: ToDosState = {
  todos: []
};

export const getTodo = createAsyncThunk('todos/getTodo', async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_TODOS}/todos`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const postTodo = createAsyncThunk('todos/postTodo', async (payload: TTodo) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_TODOS}/todos`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const removeTodo = createAsyncThunk('todos/removeTodo', async (id: number) => {
  try {
    await axios.delete(`${process.env.REACT_APP_TODOS}/todos/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
});
export const doneTodo = createAsyncThunk('todos/doneTodo', async ({ id, isDone }: { id: number; isDone: number }) => {
  try {
    const res = await axios.patch(`${process.env.REACT_APP_TODOS}/todos/${id}`, { isDone: toggleIsDone(isDone) });
    return id;
  } catch (error) {
    console.log(error);
  }
});

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => {
          return todo.id !== action.payload;
        });
      })
      .addCase(doneTodo.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo) => {
          return todo.id === action.payload ? { ...todo, isDone: toggleIsDone(todo.isDone) } : todo;
        });
      });
  }
});
function toggleIsDone(isDone: number) {
  return (isDone + 1) % 2;
}
export const { addTodo, deleteTodo, updateTodo } = toDoSlice.actions;

export const todos = (state: RootState) => state.todoReducer;

export default toDoSlice.reducer;
