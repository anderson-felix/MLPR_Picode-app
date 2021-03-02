import styled from 'styled-components';

export const LayoutDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  padding-bottom: 50px;
  font-family: 'Roboto', sans-serif;
  .book-item {
    box-shadow: 0px 4px 8px #00000020;
    background-color: #f5f5f5;
    border-radius: 30px;
    margin: 20px 18% 30px;
  }
  .page-header {
    border-radius: 30px;
  }
  .btn-remove-book {
    border-radius: 13px;
    background-color: #9466ff;
    color: #fff;
  }
`;

export const HeaderSpace = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  width: 800px;
  padding: 8px;
  border: 1px outset #9466ff49;
  border-radius: 6px;
  box-shadow: 0px 3px 6px #9466ff99;

  h2 {
    text-align: center;
    opacity: 50%;
    font-family: 'Roboto', sans-serif;
  }

  .logo {
    width: 100px;
    opacity: 60%;
  }

  .space-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  .btn-add-book {
    margin: auto 30px;
    border-radius: 13px;
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
