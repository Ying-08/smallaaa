import styled from "styled-components";

const PeoManWrapper = styled.div`
  /* 表单的css */
  .peoMan {
    background-color: white;
  }

  .inputForm {
    width: 900px;
    margin: 0 auto;
    border-bottom: 1px #eeeeee solid;
  }

  form {
    justify-content: space-around;
    padding-top: 10px;
  }

  input {
    margin-bottom: 10px;
  }

  .buttons {
    margin: 15px 30px;
  }

  .null {
    color: white;
    background-color: #81b337;
  }

  .export {
    color: white;
    background-color: #f7af62;
  }
  /* 表格的css */
  .ant-table-thead tr th {
    background-color: #0b93ea;
    border-radius: 0px;
    text-align: center;
    color: white;
  }

  #table {
    margin: 20px;
    border-radius: 0;
  }

  #table td {
    text-align: center;
  }
`;

export default PeoManWrapper;
