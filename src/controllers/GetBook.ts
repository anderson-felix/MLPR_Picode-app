import { api } from "../utils/api";
import { Book } from "../interfaces/Book";

export const GetBook = async () => {
  return (await api.get(`/book`)) as Array<Book>;
};
