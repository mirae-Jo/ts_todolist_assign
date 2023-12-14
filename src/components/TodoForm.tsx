import React, { useState } from 'react';
import useInput from '../hooks/useInput';

interface IProps {
  onSubmitToDo: (e: React.FormEvent<HTMLFormElement>) => void;
}
const TodoForm = ({ onSubmitToDo }: IProps) => {
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
