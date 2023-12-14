import React from 'react';
import { EIsDone, TTodo } from '../types/types';
import TodoItem from './TodoItem';

interface IProps {
  toDos: TTodo[];
  handleUpdateToDo: (id: number) => void;
  handleDeleteToDo: (id: number) => void;
}
const TodoList = ({ toDos, handleUpdateToDo, handleDeleteToDo }: IProps) => {
  return (
    <>
      <h1>To Do</h1>
      <ul>
        {toDos
          .filter((todo) => {
            if (todo.isDone === EIsDone.UN_DONE) {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleUpdateToDo={handleUpdateToDo}
                  handleDeleteToDo={handleDeleteToDo}
                />
              );
            }
          })
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleUpdateToDo={handleUpdateToDo}
              handleDeleteToDo={handleDeleteToDo}
            />
          ))}
      </ul>
      <h1>Done</h1>
      <ul>
        {toDos
          .filter((todo) => {
            if (todo.isDone === EIsDone.DONE) {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleUpdateToDo={handleUpdateToDo}
                  handleDeleteToDo={handleDeleteToDo}
                />
              );
            }
          })
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleUpdateToDo={handleUpdateToDo}
              handleDeleteToDo={handleDeleteToDo}
            />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
