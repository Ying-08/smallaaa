import styled from "styled-components";

export const HomeWrapper = styled.div`
  .home {
    width: 100%;
    padding-bottom: 20px;
    background-color: #efefef;
  }

  .above {
    display: flex;
      width: 100%;
  }
    
    .above>div{
        margin: 0 auto;
    }

  .left {
    overflow: hidden;
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

  /* 考核管理 */
    
  .below {
    width: 100%;
    overflow-x: hidden;
      margin: 20px auto;
  }
  .accessMan {
    position: relative;
    width: 900px;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
  }

  .acc-title {
    padding: 10px 20px;
    font-size: 18px;
  }

  .drop {
    position: absolute;
    right: 30px;
    top: 10px;
  }

  .acc-mid {
    display: flex;
    margin: 10px;
  }

  .acc-mid > div {
    margin: 10px;
  }
  .square {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    background-color: #5c94c7;
    text-align: center;
  }

  .item-2 .square,
  .item-3 .square,
  .item-4 .square {
    background-color: #a3c8d3;
  }

  .square-con {
    line-height: 100px;
    font-weight: 700;
    font-size: 20px;
  }

  /* 通知公告 */
  .ann {
    position: relative;
    margin: 20px;
    width: 400px;
    border-radius: 10px;
    
    background-color: white;
  }

  .ann .ell {
    position: absolute;
    right: 40px;
    font-size: 22px;
    top: 0px;
  }
  .ann-title {
    padding: 10px 35px;
    font-size: 18px;
  }

  .ann .content {
    padding: 0 0 20px 0;
  }
  .ann .content > div:first-child {
    border-top: 1px solid #cecece;
  }
  .ann .content > div {
    position: relative;
    margin: 0 30px;
    }`