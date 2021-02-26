import React from "react";
import { useArray } from "react-hanger";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  PageHeader,
  Button,
  Descriptions,
  Popconfirm,
  Input,
  Modal,
  Layout,
} from "antd";

import { LayoutDiv, HeaderSpace } from "../components/BookStyle";
import { CreateBook } from "../pages/CreateBook";
import { Book } from "../interfaces/Book";

export const HomePage = observer(() => {
  const { Search } = Input;

  const [visible, setVisible] = React.useState(false);

  const history = useHistory();

  const showModal = () => {
    setVisible(true);
  };

  const returnToLogin = React.useCallback(() => {
    history.push("/");
  }, [history]);

  const onSearch = (value: any) => console.log(value);

  const books = useArray<Book>([
    {
      title: "O lado bom da vida",
      pages: "309",
      authors: "Matthew Quick",
      description:
        "Relata a história de Pat Peoples, um ex-professor de história na casa dos 30 anos, acaba de sair de uma instituição psiquiátrica.",
      tags: "humor romance humorous-fiction",
    },
    {
      title: "Harry Potter e a pedra filosofal",
      pages: "208",
      authors: "J. K. Rowling",
      description: "Relata o primeiro ano de Harry na escola de Hogwarts",
      tags: "fiction fantasy",
    },
    {
      title: "Jogos vorazes",
      pages: "400",
      authors: "Suzanne Collins",
      description: "Um reality show onde o último sobrevivente vence ",
      tags: "fiction fantasy drama",
    },
  ]);

  return (
    <React.Fragment>
      <HeaderSpace>
        <div className="space-header">
          <Button className="btn-add-book" onClick={showModal}>
            Adicionar
          </Button>
          <Search
            className="search-header"
            placeholder="Busca por tag"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
      </HeaderSpace>
      <LayoutDiv>
        {books.value.map((book) => (
          <div className="book-item">
            <PageHeader
              className="page-header"
              ghost={false}
              title={book.title}
              subTitle={`${book.authors} - ${book.pages} páginas`}
              extra={[
                <Popconfirm
                  title="Deseja realmente remover o livro?"
                  okText="Sim"
                  cancelText="Não"
                >
                  <Button key="1" className="btn-remove-book">
                    Remover
                  </Button>
                </Popconfirm>,
              ]}
            >
              <Descriptions size="small" column={1}>
                <Descriptions.Item label={<b>Descrição</b>}>
                  {book.description}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Tags</b>}>
                  {book.tags.split(" ").map((tag) => ` #${tag}`)}
                </Descriptions.Item>
              </Descriptions>
            </PageHeader>
          </div>
        ))}
      </LayoutDiv>
      <Modal onCancel={returnToLogin} footer={null} visible={visible}>
        <CreateBook />
      </Modal>
      <Layout></Layout>
    </React.Fragment>
  );
});
