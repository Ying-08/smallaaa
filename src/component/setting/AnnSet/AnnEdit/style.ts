import styled from "styled-components";

const annEditWrapper = styled.div`
   
  .ann {
    position: relative;
    padding: 20px;
   
  }
  .below > div,
  .above > div {
    margin-right: 30px;
  }

  .below,
  .above {
    display: flex;
  }

  .above .buttons {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }

  /*CSS*/
  input:focus,
  textarea:focus {
    outline: none;
  }

  input {
    width: 200px;
    padding: 5px;
    border: 1px solid #ededed;
    border-radius: 5px;
    font-size: 13px;
    color: #5a5d54;
  }

  textarea {
    width: 500px;
    height: 200px;
    padding: 5px;
    border: 1px solid #ededed;
    border-radius: 5px;
    resize: none;
    font-size: 13px;
    color: #5a5d54;
  }

  .below {
    margin-top: 30px;
  }

  .buttons {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
`;

export default annEditWrapper;
