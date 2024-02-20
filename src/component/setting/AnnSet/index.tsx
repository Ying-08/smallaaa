import { Table } from "antd";
import React, { useEffect } from "react";
import AnnEditWrapper from "./style";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSeletor } from "../../../store";
import { fetchAnnSetDataAction } from "./store";
import { deleteAnn } from "./service/annSet";
import { message } from "antd";

const AnnEdit = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAnnSetDataAction({ page: 1, pageSize: 10 }));
  }, []);

  const select = useAppSeletor((state) => state.annSet.anns);
  let total = select.total;
  console.log("页面打印拿到的表格特数据", select);

  const [messageApi, contextHolder] = message.useMessage();

  const info = (text: string) => {
    messageApi.info(text);
  };

  const columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "组别",
      dataIndex: "noGroup",
      key: "noGroup",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "发布时间",
      dataIndex: "publishTime",
      key: "publishTime",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "发布人",
      dataIndex: "publisherUsername",
      key: "publisherUsername",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
      render: (text: any, record: any) => (
        <span>
          <button
            className="delete"
            onClick={() => {
              deleteAnn(record.id)
                .then(() => {
                  info("删除成功");
                })
                .catch(() => {
                  info("删除失败");
                });
              window.location.reload();
            }}
          >
            删除
          </button>
          <button
            className="editBut"
            onClick={() => {
              navigate(`/annSet/annEdit/${record.id}`);
            }}
          >
            编辑
          </button>
        </span>
      ),
    },
  ];

  const dataSource: any = select?.records?.map(
    (record: any, index: number) => ({
      ...record,
      key: index.toString(), // 使用索引作为 key
    })
  );

  return (
    <AnnEditWrapper>
      <div className="edit">
        <button
          className="add"
          onClick={() => {
            navigate(`/annSet/annEdit/`);
          }}
        >
          +添加
        </button>
        <div className="table" id="table">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{
              total: total, // 总条目数
              defaultCurrent: 1, // 默认页数
              pageSize: 10, // 每页条数
              showSizeChanger: false, // 显示每页条数切换器
              onChange: (page, pageSize) => {
                dispatch(
                  fetchAnnSetDataAction({ page: page, pageSize: pageSize })
                );
              },
            }}
          ></Table>
        </div>
      </div>
    </AnnEditWrapper>
  );
};

export default AnnEdit;
