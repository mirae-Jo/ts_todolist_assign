import axios from 'axios';

const getTodos = async () => {
  const res = await axios.get(`${process.env.REACT_APP_TODOS}/todos`);
  return res;
};

export { getTodos };
