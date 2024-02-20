import styled from "styled-components";

const EditWrapper = styled.div`
  .edit {
    position: relative;
  }
  button {
    border-radius: 8px;
    padding: 3px 20px;
    margin-left: 10px;
    font-size: 13px;
  }
  .add {
    float: right;
    color: white;
    background-color: #377f7f;
  }

  .delete {
    background-color: #54bcbd;
  }

  .editBut {
    border: 1px solid gray;
  }

  .table {
    padding: 40px 30px;
  }

  #table .ant-table-thead tr th {
    background-color: #347caf;
    border-radius: 0;
    text-align: center;
    color: white;
  }

  .table td {
    text-align: center;
  }
`;

export default EditWrapper;
