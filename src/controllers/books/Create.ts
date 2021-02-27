/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Book } from '../../interfaces/Book';
import { api } from '../../utils/api';

export const Create = async (
  title: string,
  authors: string,
  pages: string,
  description: string,
  tags: string
) => {
  return (await api.post('/book', {
    title,
    authors,
    pages,
    description,
    tags,
  })) as Book; //eslint-disable-line
};
