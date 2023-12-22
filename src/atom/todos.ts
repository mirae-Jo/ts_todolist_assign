import { atom } from 'recoil';
import { TTodo } from '../types/types';

export const todoState = atom<TTodo[]>({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: [] // default value (aka initial value)
});
