import React from 'react';
import { useArray, useInput } from 'react-hanger';
import { observer } from 'mobx-react-lite';
import { PageHeader, Button, Descriptions, Popconfirm, Input } from 'antd';

import { LayoutDiv, HeaderSpace } from '../styles/PageStyle';
import { CreateBook, Ref } from '../components/ModalCreateBook';
import {
  GetAll as GetAllBooks,
  Remove as RemoveBook,
} from '../controllers/books';
import { Book } from '../interfaces/Book';
import { Link } from 'react-router-dom';

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
    [loadBooks],
  );

  React.useEffect(() => {
    loadBooks();
  }, []); //eslint-disable-line

  return (
    <React.Fragment>
      <HeaderSpace>
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
        {books.value.map(book => (
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
                  <Link to={loadBooks}>{book.tags.map(tag => ` #${tag}`)}</Link>
                </Descriptions.Item>
              </Descriptions>
            </PageHeader>
          </div>
        ))}
      </LayoutDiv>
      <CreateBook ref={createBookModal} loadBooks={loadBooks} />
    </React.Fragment>
  );
});
