import styled from "styled-components";

export const LeftNavWrapper = styled.div`
  .nav {
    width: 210px;
    height: 100%;
    background-color: #4e99ca;
  }

  .nav-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    /* 居中左对齐 */
    display: grid;
    grid-template-rows: repeat(3, 40px); /* 固定为3行高度 */
    grid-template-columns: repeat(1, 100%);
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }

  .settings,
  .submenu {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  /* 设置总体居中 */
  .set,
  .nav a {
    padding-left: 50px;
  }

  .submenu > a {
    padding-left: 70px;
  }

  .nav a,
  .set {
    line-height: 40px;
    color: white;
    font-size: 18px;
    text-decoration: none;
    text-align: left; /* 文字左对齐 */
    align-items: center;
  }

  /* 选中之后 */
  .active {
    background-color: rgba(229, 229, 229, 0.2);
  }
`;
