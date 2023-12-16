import React, { useEffect, useState } from 'react';
import { EIsDone } from '../types/types';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { addTodo, deleteTodo, getTodo, updateTodo } from '../redux/modules/todosSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Home;
