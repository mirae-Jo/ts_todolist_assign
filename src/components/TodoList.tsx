import React, { useEffect } from 'react';
import { EIsDone } from '../types/types';
import TodoItem from './TodoItem';
import { deleteTodo, doneTodo, removeTodo, updateTodo } from '../redux/modules/todosSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const TodoList = () => {
  const toDos = useAppSelector((state) => state.todoReducer.todos);
  const dispatch = useAppDispatch();
  // 두가지 방법이 있다.
  // handler를 내린다 or setState<TToDo[]>를 내린다.
  const handleUpdateToDo = ({ id, isDone }: { id: number; isDone: number }) => {
    // setToDos((prev) => {
    //   // map 함수의 결과를 반환
    //   return prev.map((todo) => {
    //     return todo.id === id ? { ...todo, isDone: !todo.isDone ? EIsDone.DONE : EIsDone.UN_DONE } : todo;
    //   });
    // });
    dispatch(doneTodo({ id, isDone }));
  };

  const handleDeleteToDo = (id: number) => {
    // setToDos((prev) => {
    //   return prev.filter((todo) => {
    //     return todo.id !== id;
    //   });
    // });
    dispatch(removeTodo(id));
  };

  return (
    <>
      <h1>To Do</h1>
      <ul>
        {toDos
          .filter((todo) => {
            return todo.isDone === EIsDone.UN_DONE;
          })
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleUpdateToDo={() => handleUpdateToDo({ id: todo.id, isDone: todo.isDone })}
              handleDeleteToDo={() => handleDeleteToDo(todo.id)}
            />
          ))}
      </ul>
      <h1>Done</h1>
      <ul>
        {toDos
          .filter((todo) => {
            return todo.isDone === EIsDone.DONE;
          })
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleUpdateToDo={() => handleUpdateToDo({ id: todo.id, isDone: todo.isDone })}
              handleDeleteToDo={() => handleDeleteToDo(todo.id)}
            />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
