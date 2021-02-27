/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { api } from '../../utils/api';
import { Book } from '../../interfaces/Book';

export const GetAll = async (tag?: string) => {
  return (await api.get(`/books/${tag}`)) as Book[];
};
