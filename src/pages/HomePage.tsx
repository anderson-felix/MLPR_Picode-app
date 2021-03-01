/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-fragments */
/* eslint-disable import/order */
/* eslint-disable no-use-before-define */
import React from 'react';
import { useArray, useInput } from 'react-hanger';
import { observer } from 'mobx-react-lite';
import { PageHeader, Button, Descriptions, Popconfirm, Input } from 'antd';

import { LayoutDiv, HeaderSpace } from '../styles/PageStyle';
import { ModalCreateBook, Ref } from '../components/ModalCreateBook';
import {
  GetAll as GetAllBooks,
  Remove as RemoveBook,
} from '../controllers/books';
import { Book } from '../interfaces/Book';
import logo from '../icons/favicon.png';

export const HomePage = observer(() => {
  const { Search } = Input;

  const keyword = useInput('');

  const createBookModal = React.useRef<Ref>();

  const books = useArray<Book>([]);

  const loadBooks = React.useCallback(async () => {
    books.setValue(await GetAllBooks(keyword.value));
  }, [books, keyword]);

  const deleteBook = React.useCallback(
    async (_id: string) => {
      await RemoveBook(_id);
      loadBooks();
    },
    [loadBooks]
  );

  React.useEffect(() => {
    loadBooks();
  }, []); //eslint-disable-line

  return (
    <React.Fragment>
      <HeaderSpace>
        <img src={logo} alt="Open book" className="logo" />
        <h2>
          <b>MLPR</b> - Melhores livros para relembrar
        </h2>
        <div className="space-header">
          <Button
            className="btn-add-book"
            onClick={createBookModal.current?.open}
          >
            Adicionar
          </Button>
          <Search
            className="search-header"
            placeholder="Busca por tag"
            onSearch={loadBooks}
            onChange={keyword.onChange}
            style={{ width: 200 }}
            value={keyword.value}
          />
        </div>
      </HeaderSpace>
      <LayoutDiv>
        {books.value.map((book) => (
          <div className="book-item" key={`${book._id}`}>
            <PageHeader
              className="page-header"
              ghost={false}
              title={book.title}
              subTitle={`${book.authors} - ${book.pages} páginas`}
              extra={
                <Popconfirm
                  title="Deseja realmente remover o livro?"
                  okText="Sim"
                  onConfirm={() => deleteBook(book._id)}
                  cancelText="Não"
                >
                  <Button key="1" className="btn-remove-book">
                    Remover
                  </Button>
                </Popconfirm>
              }
            >
              <Descriptions size="small" column={1}>
                <Descriptions.Item label={<b>Descrição</b>}>
                  {book.description}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Tags</b>}>
                  {book.tags.map((tag) => ` #${tag}`)}
                </Descriptions.Item>
              </Descriptions>
            </PageHeader>
          </div>
        ))}
      </LayoutDiv>
      <ModalCreateBook ref={createBookModal} loadBooks={loadBooks} />
    </React.Fragment>
  );
});
