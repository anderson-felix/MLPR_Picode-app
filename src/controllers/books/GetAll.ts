import { api } from "../../utils/api";
import { Book } from "../../interfaces/Book";

export const GetAll = async (tag?: string) => {
  return (await api.get(`/books/${tag}`)) as Array<Book>;
};
