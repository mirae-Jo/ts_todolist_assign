import React, { useEffect } from 'react';
import { EIsDone, TTodo } from '../types/types';
import TodoItem from './TodoItem';

import { useRecoilState } from 'recoil';
import { todoState } from '../atom/todos';

const TodoList = () => {
  // const queryClient = useQueryClient();
  // const delMutation = useMutation(delTodo, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('todos');
  //   }
  // });
  // const updateMutation = useMutation(updateTodo, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('todos');
  //   }
  // });
  // const { isLoading, isError, data } = useQuery('todos', getTodos);
  const [data] = useRecoilState(todoState);

  const handleUpdateToDo = ({ id, isDone }: { id: number; isDone: number }) => {};

  const handleDeleteToDo = (id: number) => {};

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
