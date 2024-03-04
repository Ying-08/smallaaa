import styled from "styled-components";

const ExamManWrapper = styled.div`
  .ellipsis {
    white-space: nowrap; /* 禁止文本换行 */
    overflow: hidden; /* 隐藏溢出的内容 */
    text-overflow: ellipsis; /* 超出部分显示省略号 */
  }

  .examMan {
    margin: 0 auto;
    justify-content: space-between;
  }

  .examMan .left {
    width: 900px;
    padding: 20px;
      margin: 0 auto;
  }

  .left > div {
    position: relative;
  }

  .examMan .title {
    padding: 10px;
    color: #595757;
  }

  .examProcess .content,
  .examCon .content,
  .right .content {
    border-radius: 10px;
    background-color: #efefef;
  }

  .examCon {
    margin-top: 20px;
  }
  .examProcess tr,
  .examProcess .ant-table-thead th,
  .examCon tr,
  .examCon .ant-table-thead th {
    background-color: #efefef;
  }

  .examMan button {
    color: #3795cb;
    background-color: #efefef;
  }

  .examProcess .content {
    padding: 15px 5px;
  }

  .table-container {
    height: 200px;
    overflow-y: scroll;
  }

  /* 底部按钮 */
  .examProcess,
  .right {
    position: relative;
  }

  .examProcess .add {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    color: white;
    background-color: #7fb8ee;
  }

  .examProcess .edit:hover,
  .examProcess .delete:hover {
    background-color: #fafafa;
  }
`;

export default ExamManWrapper