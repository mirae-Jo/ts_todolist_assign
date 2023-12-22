import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import { EIsDone } from '../types/types';
import { useAppDispatch } from '../app/hooks';
import { postTodo } from '../redux/modules/todosSlice';
import { QueryClient, useMutation, useQueryClient } from 'react-query';
import { addTodo } from '../api/todos';
import { useRecoilState } from 'recoil';
import { todoState } from '../atom/todos';

const TodoForm = () => {
  // const queryClient = useQueryClient();
  // const mutation = useMutation(addTodo, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('todos');
  //   }
  // });

  const [todos, setTodos] = useRecoilState(todoState);

  const [title, setTitle, clearTitle] = useInput();
  const [contents, SetContents, clearContents] = useInput();

  const dispatch = useAppDispatch();
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
    // dispatch(postTodo(newToDo));
    // mutation.mutate(newToDo);
    setTodos((prev) => [newToDo, ...prev!]);
    clearTitle();
    clearContents();
    const titleInput: HTMLInputElement = target[0] as HTMLInputElement;
    titleInput.focus();
  };

  return (
    <div>
      <form onSubmit={onSubmitToDo}>
        <input value={title} onChange={setTitle} />
        <input value={contents} onChange={SetContents} />
        <button>등록</button>
      </form>
    </div>
  );
};

export default TodoForm;
