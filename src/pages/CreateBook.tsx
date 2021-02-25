import React from "react";
import { useInput } from "react-hanger";
import { Button } from "antd";

import { useGlobalContext } from "../contexts/global";
import { CreateController } from "../controllers/CreateController";

export const CreateBook = () => {
  const globalContext = useGlobalContext();

  const title = useInput("");
  const authors = useInput("");
  const pages = useInput("");
  const description = useInput("");
  const tags = useInput("");

  const canCreate = React.useCallback(() => {
    return (
      title.value.trim().length > 0 &&
      authors.value.trim().length > 0 &&
      pages.value.trim().length > 0 &&
      description.value.trim().length > 0 &&
      tags.value.trim().length > 0
    );
  }, [title, authors, pages, description, tags]);

  const doCreate = React.useCallback(async () => {
    const data = await CreateController(
      title.value,
      authors.value,
      pages.value,
      description.value,
      tags.value
    );

    globalContext.bookData = data;
  }, [title, authors, pages, description, tags, globalContext]);

  return (
    <div>
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="exampleInputTitle">Título</label>
          <input
            name="title"
            className="form-control"
            value={title.value}
            onChange={title.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputAuthors">Autores</label>
          <input
            name="authors"
            className="form-control"
            value={authors.value}
            onChange={authors.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPages">Páginas</label>
          <input
            name="pages"
            className="form-control"
            value={pages.value}
            onChange={pages.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputDescription">Descrição</label>
          <input
            className="form-control"
            name="description"
            value={description.value}
            onChange={description.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputTags">Tags</label>
          <input
            className="form-control"
            name="tags"
            value={tags.value}
            onChange={tags.onChange}
          />
        </div>
        <Button disabled={!canCreate()} onClick={doCreate}>
          Cadastrar livro
        </Button>
      </React.Fragment>
    </div>
  );
};
