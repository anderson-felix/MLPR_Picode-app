import React from "react";
import { useInput } from "react-hanger";
import { useHistory } from "react-router-dom";
import { Button, Space } from "antd";

import { useGlobalContext } from "../contexts/global";
import { CreateController } from "../controllers/CreateController";
import { CreateSpace } from "../components/BookStyle";

export const CreateBook = () => {
  const globalContext = useGlobalContext();
  const history = useHistory();

  const title = useInput("");
  const authors = useInput("");
  const pages = useInput("");
  const description = useInput("");
  const tags = useInput("");

  const returnToHomePage = React.useCallback(() => {
    history.push("/");
  }, [history]);

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
        <CreateSpace>
          <div className="form-group">
            <label htmlFor="exampleInputTitle">Título do livro</label>
            <input
              name="title"
              className="form-control"
              value={title.value}
              onChange={title.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputAuthors">Autor</label>
            <input
              name="authors"
              className="form-control"
              value={authors.value}
              onChange={authors.onChange}
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
            <label htmlFor="exampleInputPages">Páginas</label>
            <input
              name="pages"
              className="form-control"
              value={pages.value}
              onChange={pages.onChange}
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
          <Space>
            <Button onClick={returnToHomePage} className="btn-cancel">
              Cancelar
            </Button>
            <Button
              disabled={!canCreate()}
              onClick={doCreate}
              className="btn-create"
            >
              + Adicionar
            </Button>
          </Space>
        </CreateSpace>
      </React.Fragment>
    </div>
  );
};
