import styled from "styled-components";

export const LayoutDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

  font-family: "Roboto", sans-serif;
  .book-item {
    box-shadow: 0px 3px 6px #00000029;
    background-color: #f5f5f5;
    border-radius: 20px;
    margin: 20px 18% 30px;
  }
  .page-header {
    border-radius: 20px;
  }
  .btn-remove-book {
    border-radius: 10px;
    background-color: #9466ff;
    color: #fff;
  }
`;

export const HeaderSpace = styled.div`
  margin: 50px 400px;
  padding: 8px;
  border: 1px outset #9466ff99;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #9466ff99;

  .space-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  .btn-add-book {
    margin: auto 30px;
    border-radius: 10px;
    background-color: #9466ff;
    color: #fff;
  }
`;

export const CreateSpace = styled.div`
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  margin: 0px 50px;

  .form-control {
    border: 1px solid #9466ff;
  }
  .btn-cancel {
    height: 45px;
    width: 144px;
    background-color: #9466ff;
    color: white;
    border-radius: 10px;
    box-shadow: 0px 3px 6px #00000029;
  }
  .btn-create {
    height: 45px;
    width: 144px;
    background-color: #9466ff;
    color: white;
    border-radius: 10px;
    box-shadow: 0px 3px 6px #00000029;
    margin-left: 75px;
  }
`;
