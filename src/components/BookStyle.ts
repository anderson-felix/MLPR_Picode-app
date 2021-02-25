import styled from "styled-components";

export const LayoutDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

  font-family: "Roboto", sans-serif;
  border: 1px solid black;
  padding: 20px;

  .book-item {
    padding: 4px;
    background-color: #f5f5f5;
    border: 1px solid black;
    border-radius: 6px;
    margin: 20px 18%;
  }
`;

export const HeaderSpace = styled.div`
  .space-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin: auto 350px;
  }
  .btn-search {
    margin: auto 30px;
  }
`;
