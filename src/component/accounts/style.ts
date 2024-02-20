import styled from "styled-components";

const AccountsWrapper = styled.div`
  .edit {
    position: relative;
  }
  button {
    border-radius: 8px;
    padding: 3px 20px;
    /* margin-left: 10px; */
    margin-right: 30px;
    font-size: 13px;
  }
  .add {
    float: right;
    color: white;
    background-color: #377f7f;
  }

  .delete {
    padding: 0;
    margin-left: 0;
    color: #0b93ea;
  }

  .editBut {
    border: 1px solid gray;
  }

  .table {
    padding: 40px 30px;
  }

  #table .ant-table-thead tr th {
    background-color: #0b93ea;
    border-radius: 0;
    text-align: center;
    color: white;
  }

  .table td {
    text-align: center;
  }
`;

export default AccountsWrapper;
