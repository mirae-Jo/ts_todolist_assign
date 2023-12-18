import axios from 'axios';
import { EIsDone, TTodo } from '../types/types';

const getTodos = async (): Promise<TTodo[]> => {
  const res = await axios.get(`${process.env.REACT_APP_TODOS}/todos`);
  return res.data;
};

const addTodo = async (newToDo: TTodo): Promise<void> => {
  await axios.post(`${process.env.REACT_APP_TODOS}/todos`, newToDo);
};

const delTodo = async (id: number) => {
  await axios.delete(`${process.env.REACT_APP_TODOS}/todos/${id}`);
};
const updateTodo = async ({ id, isDone }: { id: number; isDone: number }) => {
  await axios.patch(`${process.env.REACT_APP_TODOS}/todos/${id}`, { isDone: !isDone ? EIsDone.DONE : EIsDone.UN_DONE });
};

export { getTodos, addTodo, delTodo, updateTodo };
