import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 60px;
  line-height: 60px;

  .head {
    display: flex;
    width: 100%;
    background-color: white;
  }

  .title {
    font-size: 25px;
  }

  button {
    position: absolute;
    line-height: 60px;
    padding: 0;
    right: 30px;
    background-color: white;
    border: none;
  }

  .user {
    position: absolute;
    right: 100px;
  }
`;
