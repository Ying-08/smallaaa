import styled from "styled-components";

export const HomeWrapper = styled.div`
  .home {
    display: flex;
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;
  }

  .overall-data {
    display: flex;
    width: 600px;
    margin: 8px;
  }
  .item {
    width: 100px;
    height: 140px;
    margin: 8px;
    border: 1px #d8d5d5 solid;
    border-radius: 12px;
    background-color: white;
  }

  .icon-wrapper {
    width: 45px;
    height: 40px;
    line-height: 45px;
    margin: 25px auto 10px auto;
    border-radius: 5px;
    text-align: center;
  }

  .item-title {
    color: #969494;
    text-align: center;
    margin-bottom: 3px;
  }

  .item-data {
    text-align: center;
  }

  .one-i {
    border: 1px #33afec solid;
  }
  .two-i {
    border: 1px #facfa0 solid;
  }
  .three-i {
    border: 1px #afeaf9 solid;
  }
  .four-i {
    border: 1px #e85014 solid;
  }
  .five-i {
    border: 1px #13e9f0 solid;
  }

  /* 考核进度的css */
  .process {
    border-radius: 10px;
    background-color: white;
    margin-top: 16px;
  }

  .pro-title {
    margin: 0 auto 10px 25px;
    padding-top: 20px;
    font-size: 17px;
  }

  /* 人员管理 */
  .peo-man {
    position: relative;
    height: 200px;
    background-color: white;
    margin: 16px;
    border-radius: 10px;
  }

  .peo-title {
    font-size: 18px;
    padding: 10px 20px;
  }

  .ell {
    position: absolute;
    right: 30px;
    top: 5px;
  }
`;
