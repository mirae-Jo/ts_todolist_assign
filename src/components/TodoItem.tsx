import React from 'react';
import { TTodo } from '../types/types';

interface IProps {
  todo: TTodo;
  handleUpdateToDo: (id: number) => void;
  handleDeleteToDo: (id: number) => void;
}
const TodoItem = ({ todo, handleUpdateToDo, handleDeleteToDo }: IProps) => {
  return (
    <div>
      <span>{todo.title}</span>
      <p>{todo.contents}</p>
      <button onClick={() => handleUpdateToDo(todo.id)}>{!todo.isDone ? '완료' : '취소'}</button>
      <button onClick={() => handleDeleteToDo(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
