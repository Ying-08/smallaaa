import { text } from "stream/consumers";
import styled from "styled-components";

const SetWrapper = styled.div`
  .set {
    display: flex;
    width: 900px;
    margin: 0 auto;
    justify-content: space-between;
  }

  .left {
    width: 400px;
    padding: 10px;
  }

  .right {
    width: 500px;
    padding: 20px;
    border-left: 1px #cbcbcb solid;
  }

  .ann,
  .left,
  .cateIntro {
    position: relative;
  }

  .set button {
    position: absolute;
    top: 0;
    right: 20px;
    padding: 3px 23px;
    border-radius: 7px;
    background-color: #7fb8ee;
  }

  .content {
    margin-top: 30px;
  }

  /* 团队介绍 */
  .mainIntro {
    margin-top: 20px;
    padding: 15px;
    border-radius: 18px;
    background-color: #efefef;
  }

  .mainIntro .title {
    font-size: 21px;
  }

  .mainIntro img {
    width: 300px;
    height: auto;
    margin: 0 auto;
  }

  /* 通知公告 */
  .ann .title {
    padding-left: 20px;
    padding-bottom: 20px;
    font-size: 18px;
    /* border-bottom: 1px solid #cbcbcb; */
  }

  .content-item {
    position: relative;
    padding: 20px 30px;
    margin-right: 20px;
    border-bottom: 1px solid #cbcbcb;
    border-top: 1px solid #cbcbcb;
  }

  .content-item > div {
    position: relative;
    padding: 10px;
    border-bottom: 1px solid #cbcbcb;
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  /* 省略 */
  .con-content {
    overflow: hidden; /* 隐藏超出部分 */
    text-overflow: ellipsis; /* 显示省略号 */
    white-space: nowrap; /* 不换行 */
    width: 100%; /* 可根据需要设置容器宽度 */
  }
  /* 组别介绍 */
  .cateIntro {
    padding: 0 0 20px 0;
    margin-top: 20px;
  }

  .cateIntro .title {
    font-size: 18px;
  }

  .cateIntro .content {
    position: relative;
    margin-top: 20px;
    padding-bottom: 13px;
    background-color: #efefef;
    border-radius: 8px;
  }

  .drop {
    position: absolute;
    top: 8px;
    right: 5px;
  }

  .content .title {
    padding-top: 10px;
    color: #646464;
    text-align: center;
  }

  .content .text {
    width: 370px;
    margin: 0 auto;
    padding-bottom: 20px;
  }

  .text .title {
    font-size: 16px;
    margin-bottom: 10px;
    color: #1e1e1e;
    text-align: left;
  }

  .text {
    height: 200px;
    font-size: 13px;
    overflow-y: scroll;
  }
`;

export default SetWrapper;
