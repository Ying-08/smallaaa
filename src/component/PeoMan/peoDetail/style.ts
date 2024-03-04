import styled from "styled-components";

const PeoDetailWrapper = styled.div`
  .peoDetail .content {
    margin-top: 15px;
    padding: 20px 25px;
    border-radius: 8px;
    background-color: #efefef;
  }
  .peoDetail > div {
    margin: 0 auto;
  }

  /* 上面 */
  .above {
    display: flex;
    width: 900px;
    justify-content: space-between;
  }

  .above .left {
    width: 250px;
  }

  .above .right {
    width: 500px;
  }

  .above .pro {
    padding-bottom: 10px;
    font-size: 18px;
    border-bottom: 1px #cfcfcf solid;
  }

  .above .other-mes {
    padding: 10px;
  }

  /* 下面 */
  .below {
    display: flex;
    position: relative;
    width: 900px;
    margin: 30px;
    justify-content: space-between;
  }

  .remark {
    width: 500px;
  }

  .pro-set {
    width: 450px;
  }

  .remark .content {
    height: 200px;
    padding: 10px;
  }

  .right button {
    margin: 0 8px;
    border: 1px #dbdbdb solid;
    border-radius: 8px;
    padding: 3px 8px;
    font-size: 12px;
  }

  .right input {
    width: 120px;
    margin-right: 35px;
  }

  .content .item {
    padding: 8px;
    border-bottom: 1px solid #dbdbdb;
  }

  .fail {
    color: white;
    background-color: #a4adb3;
  }

  /* 按钮 */
  .buttons {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
  /* 取消黑框 */
    .remark{
        position: relative;
        margin-top: 25px;
    }
    
    .remark .space{
        position: absolute;
        right: 0;
        top: 0;
    }
  textarea {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: none;
    outline: none;
    resize: none;
    font-size: 12px;
  }

  /* 取消点击效果 */
  textarea:focus {
    outline: none;
  }
    
//    按钮的设置
    .pass{
        color: white;
        background-color: #4E99CA;
    }
`;

export default PeoDetailWrapper;
