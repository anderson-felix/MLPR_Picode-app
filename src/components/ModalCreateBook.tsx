/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-fragments */
/* eslint-disable no-use-before-define */
import React from 'react';
import { useInput, useBoolean } from 'react-hanger';
import { Button, Space, Modal, message } from 'antd';

import { Create as CreateBookController } from '../controllers/books/Create';
import { CreateSpace } from '../styles/PageStyle';

interface Props {
  loadBooks: () => void;
}

export interface Ref {
  open: () => void;
  close: () => void;
}

export const ModalCreateBook = React.forwardRef(({ loadBooks }: Props, ref) => {
  const showModal = useBoolean(false);

  const title = useInput('');
  const authors = useInput('');
  const pages = useInput('');
  const description = useInput('');
  const tags = useInput('');

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
    const closeLoading = message.loading(`Cadastrando livro...`);
    await new Promise((res) => setTimeout(res, 1000));
    await CreateBookController(
      title.value,
      authors.value,
      pages.value,
      description.value,
      tags.value
    );
    closeLoading();
    message.success(`Livro "${title.value}" cadastrado com sucesso!`);
    showModal.setFalse();
    loadBooks();
  }, [showModal, title, authors, pages, description, tags, loadBooks]);

  React.useImperativeHandle(ref, () => ({
    open: showModal.setTrue,
    close: showModal.setFalse,
  }));

  React.useEffect(() => {
    if (showModal.value === true) {
      title.setValue(``);
      authors.setValue(``);
      pages.setValue(``);
      description.setValue(``);
      tags.setValue(``);
    }
  }, [showModal.value]); // eslint-disable-line

  return (
    <Modal
      onCancel={showModal.setFalse}
      visible={showModal.value}
      footer={null}
    >
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
              <Button onClick={showModal.setFalse} className="btn-cancel">
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
    </Modal>
  );
});
