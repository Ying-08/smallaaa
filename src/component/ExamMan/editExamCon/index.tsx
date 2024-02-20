import { Table } from "antd";
import React from "react";
import EditWrapper from "./style";
import { Navigate, useNavigate } from "react-router-dom";

const EditExamCon = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "组别",
      dataIndex: "cate",
      key: "cate",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "发布时间",
      dataIndex: "time",
      key: "time",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "发布人",
      dataIndex: "people",
      key: "people",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
      render: () => (
        <span>
          <button className="delete">删除</button>
          <button
            className="editBut"
            onClick={() => {
              navigate("/editContent");
            }}
          >
            编辑
          </button>
        </span>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      title: "一轮考核",
      cate: "前端组",
      time: "2024",
      people: "前端组组长",
    },
  ];
  return (
    <EditWrapper>
      <div className="edit">
        <button className="add">+添加</button>
        <div className="table" id="table">
          <Table columns={columns} dataSource={dataSource}></Table>
        </div>
      </div>
    </EditWrapper>
  );
};

export default EditExamCon;
