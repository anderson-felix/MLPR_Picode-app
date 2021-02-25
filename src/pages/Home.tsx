import React from "react";
import { useArray } from "react-hanger";
import { Route, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { PlusOutlined } from "@ant-design/icons";
import {
  PageHeader,
  Button,
  Descriptions,
  Layout,
  Popconfirm,
  Input,
  Modal,
} from "antd";

import { LayoutDiv, HeaderSpace } from "../components/BookStyle";
import { Book } from "../interfaces/Book";
import { Link } from "react-router-dom";

export const HomePage = observer(() => {
  const { Header } = Layout;
  const { Search } = Input;

  const history = useHistory();

  const returnToLogin = React.useCallback(() => {
    history.push("./books");
  }, [history]);

  const registerBook = React.useCallback(() => {
    history.push("./createBook");
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
      <Header>
        <HeaderSpace>
          <div className="space-header">
            <Button
              icon={<PlusOutlined />}
              className="btn-search"
              onClick={registerBook}
            >
              Adicionar
            </Button>
            <Search
              placeholder="Busca por tag"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </HeaderSpace>
      </Header>
      <LayoutDiv>
        {books.value.map((book) => (
          <div className="book-item">
            <PageHeader
              ghost={false}
              title={book.title}
              subTitle={`${book.authors} - ${book.pages} páginas`}
              extra={[
                <Popconfirm
                  title="Deseja realmente remover o livro?"
                  okText="Sim"
                  cancelText="Não"
                >
                  <Button key="1" danger type="primary">
                    Remover
                  </Button>
                  ,
                </Popconfirm>,
              ]}
            >
              <Descriptions size="small" column={1}>
                <Descriptions.Item label={<b>Descrição</b>}>
                  {book.description}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Tags</b>}>
                  <Link to={"/"}>{book.tags}</Link>
                </Descriptions.Item>
              </Descriptions>
            </PageHeader>
          </div>
        ))}
      </LayoutDiv>
      {/* MODAL NÃO ESTÁ FUNCIONANDO CORRETAMENTE ):
      TAMBÉM FALTA A ESTILIZAÇÃO */}
      <Route path={"/createBook"} exact>
        <Modal onCancel={returnToLogin} footer={null} visible={true}></Modal>
      </Route>
    </React.Fragment>
  );
});
