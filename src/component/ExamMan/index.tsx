import React, { useEffect } from "react";
import ExamManWrapper from "./style";
import { Button, Table, TableProps, Modal } from "antd";
import { Space } from "antd";
import {useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSeletor } from "../../store";
import { fetchExamManDataAction } from "./store/examMan";
import { message } from "antd";
import { deletePro } from "./service/examMan";
import type { TableColumnsType } from "antd";
import {useState} from "react";


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
    deletePro(record.id).then((res)=>{
        info(res.data)
    });

    dispatch(fetchExamManDataAction());
  };

  // 处理下载的流程
  const [visible, setVisible] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleDownload = (url: string) => {
    setDownloadUrl(url);
    setVisible(true);
  };

  const handleConfirmDownload = () => {
    // 执行文件下载操作，这里可以使用类似 window.open(downloadUrl) 的方式下载文件
    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    // 设置要下载的文件链接
    downloadLink.href = downloadUrl;
    downloadLink.download = downloadUrl; // 设置下载文件的名称

    // 模拟点击下载链接
    downloadLink.click();

    // 下载完成后移除<a>标签
    document.body.removeChild(downloadLink);
    // 下载完成后关闭确认框
    setVisible(false);
  };
  // 考核流程
  interface examTabType {
    id: string;
    key: string;
    exam: string;
    startTime: string;
    endTime: string;
    status: string;
    contentUrl:string[] ;
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
      render: (contentUrl:string[]) => (
          <div>
            {contentUrl.map((item:string,index:number)=> (
                <div key={index} onClick={() => handleDownload(item)} style={{cursor:"pointer"}}>{item}</div>
            ))}
          </div>
      )
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
      <Modal
          title="确认下载"
          visible={visible}
          onOk={handleConfirmDownload}
          onCancel={() => setVisible(false)}
          style={{position:"absolute",top:"45%",left:"45%"}}
      >
        <p>确定要下载文件吗？</p>
      </Modal>
    </ExamManWrapper>
  );
};

export default ExamMan;
