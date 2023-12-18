import React, { useEffect } from 'react';
import { EIsDone, TTodo } from '../types/types';
import TodoItem from './TodoItem';
import { doneTodo, removeTodo } from '../redux/modules/todosSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { delTodo, getTodos, updateTodo } from '../api/todos';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const delMutation = useMutation(delTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });
  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });
  // const toDos = useAppSelector((state) => state.todoReducer.todos);
  const { isLoading, isError, data } = useQuery('todos', getTodos);
  if (isLoading) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>오류 발생</h1>;
  }
  // 두가지 방법이 있다.
  // handler를 내린다 or setState<TToDo[]>를 내린다.
  const handleUpdateToDo = ({ id, isDone }: { id: number; isDone: number }) => {
    // setToDos((prev) => {
    //   // map 함수의 결과를 반환
    //   return prev.map((todo) => {
    //     return todo.id === id ? { ...todo, isDone: !todo.isDone ? EIsDone.DONE : EIsDone.UN_DONE } : todo;
    //   });
    // });
    // dispatch(doneTodo({ id, isDone }));
    updateMutation.mutate({ id, isDone });
  };

  const handleDeleteToDo = (id: number) => {
    // setToDos((prev) => {
    //   return prev.filter((todo) => {
    //     return todo.id !== id;
    //   });
    // });
    // dispatch(removeTodo(id));
    delMutation.mutate(id);
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
                handleUpdateToDo={() => handleUpdateToDo({ id: todo.id, isDone: todo.isDone })}
                handleDeleteToDo={() => handleDeleteToDo(todo.id)}
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
                handleUpdateToDo={() => handleUpdateToDo({ id: todo.id, isDone: todo.isDone })}
                handleDeleteToDo={() => handleDeleteToDo(todo.id)}
              />
            ))}
      </ul>
    </>
  );
};

export default TodoList;
