import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import { EIsDone } from '../types/types';
import { useAppDispatch } from '../app/hooks';
import { addTodo, postTodo } from '../redux/modules/todosSlice';

const TodoForm = () => {
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
    dispatch(postTodo(newToDo));
  };

  const [title, setTitle] = useInput();
  const [contents, SetContents] = useInput();
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
