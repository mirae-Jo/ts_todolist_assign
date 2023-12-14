import React, { useState } from 'react';
import { EIsDone, TTodo } from '../types/types';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../redux/modules/todosSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todoReducer);
  const onSubmitToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const title = (target[0] as HTMLInputElement).value;
    const contents = (target[1] as HTMLInputElement).value;

    const newToDo = {
      id: Date.now(),
      title,
      contents,
      isDone: EIsDone.UN_DONE
    };
    // setToDos((prev) => [newToDo, ...prev!]);
    dispatch(addTodo(newToDo));
  };

  // 두가지 방법이 있다.
  // handler를 내린다 or setState<TToDo[]>를 내린다.
  const handleUpdateToDo = (id: number) => {
    // setToDos((prev) => {
    //   // map 함수의 결과를 반환
    //   return prev.map((todo) => {
    //     return todo.id === id ? { ...todo, isDone: !todo.isDone ? EIsDone.DONE : EIsDone.UN_DONE } : todo;
    //   });
    // });
    dispatch(updateTodo(id));
  };

  const handleDeleteToDo = (id: number) => {
    // setToDos((prev) => {
    //   return prev.filter((todo) => {
    //     return todo.id !== id;
    //   });
    // });
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <TodoForm onSubmitToDo={onSubmitToDo} />
      <TodoList toDos={todos} handleUpdateToDo={handleUpdateToDo} handleDeleteToDo={handleDeleteToDo} />
    </>
  );
};

export default Home;
