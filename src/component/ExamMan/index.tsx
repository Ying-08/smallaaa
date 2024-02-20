import React, { useEffect } from "react";
import ExamManWrapper from "./style";
import { Button, Table, TableProps } from "antd";
import { Space } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSeletor } from "../../store";
import { fetchExamManDataAction } from "./store/examMan";
import { message } from "antd";
import { deletePro } from "./service/examMan";
import type { TableColumnsType } from "antd";

const ExamMan = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSeletor((state) => state.examManSlice);
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const info = (text: string) => {
    messageApi.info(text);
  };

  useEffect(() => {
    dispatch(fetchExamManDataAction());
  }, []);

  let examPro = selector.process;
  let examCondition = selector.condition;

  const handleDelete = (record: any) => {
    // 处理删除逻辑
    console.log("删除记录:", record);
    deletePro(record.id);
  };

  // 考核流程
  interface examTabType {
    id: string;
    key: string;
    exam: string;
    startTime: string;
    endTime: string;
    status: string;
    contentUrl: string;
  }

  const columns: TableColumnsType<examTabType> = [
    {
      title: "考核",
      dataIndex: "name",
      width: 150,
      align: "center",
    },
    {
      title: "时间",
      dataIndex: "startTime",
      width: 200,
      align: "center",
      render: (_, record) => (
        <div>
          <div>{record.startTime} -</div>
          <div>{record.endTime}</div>
        </div>
      ),
    },
    {
      title: "状态",
      dataIndex: "status",
      align: "center",
    },
    {
      title: "考核内容",
      dataIndex: "contentUrl",
      ellipsis: true,
      align: "center",
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      render: (_, record) => (
        <span>
          <a onClick={() => handleDelete(record)} className="delete">
            删除
          </a>
        </span>
      ),
    },
  ];

  const data: examTabType[] = examPro.map((record: any, index) => ({
    ...record,
    key: index.toString(), // 使用索引作为 key
  }));

  // 考核情况
  interface examConTabType {
    key: string;
    name: string;
    passRate: string;
    passCount: string;
  }

  const conColumns: TableProps<examConTabType>["columns"] = [
    {
      title: "考核",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "通过人数",
      dataIndex: "passCount",
      key: "passCount",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "通过率",
      dataIndex: "passRate",
      key: "passRate",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "通过人员名单",
      dataIndex: "operate",
      key: "operate",
      render: (_, record) => (
        <Space size="middle">
          <button>查看</button>
        </Space>
      ),
    },
  ];

  const conData: examConTabType[] = examCondition.map((record: any, index) => ({
    ...record,
    key: index.toString(), // 使用索引作为 key
  }));

  return (
    <ExamManWrapper>
      {contextHolder}
      <div className="examMan">
        <div className="left">
          <div className="examProcess">
            <Button
              className="add"
              onClick={() => {
                navigate("/examMan/editContent/");
              }}
            >
              添加
            </Button>
            <div className="title">考核流程</div>
            <div className="content">
              <div className="table-container">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                ></Table>
              </div>
            </div>
          </div>

          <div className="examCon">
            <div className="title">考核情况</div>
            <div className="content">
              <Table
                columns={conColumns}
                dataSource={conData}
                pagination={false}
              ></Table>
            </div>
          </div>
        </div>
      </div>
    </ExamManWrapper>
  );
};

export default ExamMan;
