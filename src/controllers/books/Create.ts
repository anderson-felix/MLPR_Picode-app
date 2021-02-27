import { Book } from "../../interfaces/Book";
import { api } from "../../utils/api";

export const Create = async (
  title: string,
  authors: string,
  pages: string,
  description: string,
  tags: string
) => {
  return (await api.post("/books", {
    title,
    authors,
    pages,
    description,
    tags,
  })) as Book;
};
