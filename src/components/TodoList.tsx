import React, { useEffect } from 'react';
import { EIsDone, TTodo } from '../types/types';
import TodoItem from './TodoItem';

import { useRecoilState } from 'recoil';
import { todoState } from '../atom/todos';

const TodoList = () => {
  const [data, setData] = useRecoilState(todoState);

  const handleUpdateToDo = (id: number) => {
    setData((prev) => {
      // map 함수의 결과를 반환
      return prev.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone ? EIsDone.DONE : EIsDone.UN_DONE } : todo;
      });
    });
  };

  const handleDeleteToDo = (id: number) => {
    setData((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <>
      <h1>To Do</h1>
      <ul>
        {data &&
          data
            .filter((todo) => {
              return todo.isDone === EIsDone.UN_DONE;
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
        {data &&
          data
            .filter((todo) => {
              return todo.isDone === EIsDone.DONE;
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
