import styled from "styled-components";

export const APPStyle = styled.div`
  .APPWrapper {
    display: grid;
    grid-template-columns: auto 1fr; /* 第一列宽度自适应，第二列占据剩余宽度 */
    width: 100%;
    height: 100%;
  }

  .main {
    width: 100%;
    background-color: white;
    overflow: hidden;
  }
`;
