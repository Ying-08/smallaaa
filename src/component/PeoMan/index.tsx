import React, { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { fetchPeoDataAction } from "./store/peoMan";
import { Form, Table, TableProps, Input, Button, Row, Col } from "antd";
import PeoManWrapper from "./style";
import { useAppSeletor } from "../../store";
import { Select } from "antd";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import {deleteUser} from "./service/peoMan";

// 下方展示的表格
interface peoTabType {
  key: string;
  serialNum?: number;
  name: string;
  college: string;
  major: string;
  cate: string;
  currentAssess: string;
  phone: string;

  openid: string;
}

const PeoMan = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = (text: string) => {
    messageApi.info(text);
  };

  const dispatch = useAppDispatch();
  // 获取相应的数据
  const state = useAppSeletor((state) => state.peoMan.data);
  let total: number = state.total;
  const data: peoTabType[] = state.records;
  useEffect(() => {
    dispatch(fetchPeoDataAction({ page: 1, pageSize: 10 }));
  }, []);

  //
  const navigate = useNavigate();
  const columns: TableProps<peoTabType>["columns"] = [
    {
      title: "序号",
      dataIndex: "serialNum",
      key: "serialNum",
      render: (text, record, index) => index + 1,
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "学院",
      dataIndex: "college",
      key: "college",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "专业年级班级",
      dataIndex: "major",
      key: "major",
      render: (text) => <span>{text}</span>,
    },
    // {
    //   title: "组别",
    //   dataIndex: "cate",
    //   key: "cate",
    //   render: (text) => <span>{text}</span>,
    // },
    {
      title: "目前进度",
      dataIndex: "currentAssess",
      key: "currentAssess",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "联系方式",
      dataIndex: "phone",
      key: "phone",
      render: (text, record) => (
          <span>
          {text}
              <a
                  style={{marginLeft: 20}}
                  onClick={() => {
                      console.log("点击了");
                      localStorage.setItem("people", JSON.stringify(record));
                      navigate(`/peoMan/peoDetail/${record.openid}`);

                  }}
              >
            查看
          </a>
            <a
                style={{marginLeft: 20}}
                onClick={async () => {
                    console.log("点击了");
                    await deleteUser(record.openid)
                    window.location.reload()
                }}
            >
            删除
          </a>
        </span>
      ),
    },
  ];
    // 输入表单

    const handleSubmit = (values: any) => {
        dispatch(
            fetchPeoDataAction({
                page: 1,
                pageSize: 10,
                name: values.name,
                college: values.college,
                major: values.major,
                groupOption: values.groupOption,
            })
    );
  };

  return (
    <PeoManWrapper>
      {contextHolder}
      <div className="peoMan clearfix">
        {/* 上方的输入表单 */}

        <div className="inputForm">
          <Form layout="inline" onFinish={handleSubmit}>
            <Form.Item label="姓名" name="name">
              <Input placeholder="输入姓名" style={{ width: 120 }} />
            </Form.Item>
            <Form.Item label="学院" name="college">
              <Input placeholder="输入学院" style={{ width: 120 }} />
            </Form.Item>

            <Form.Item label="专业" name="major">
              <Input placeholder="输入专业" style={{ width: 120 }} />
            </Form.Item>
            <Form.Item label="组别" name="groupOption">
              <Select
                style={{ width: 120 }}
                placeholder="全部  "
                optionFilterProp="children"
                options={[
                  { value: "0", label: "后台组" },
                  { value: "1", label: "前端组" },
                  { value: "2", label: "AI组" },
                  { value: "3", label: "传媒组" },
                  { value: "4", label: "机械组" },
                  { value: "5", label: "电控组" },
                  { value: "6", label: "管理组" },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" style={{ float: "right" }}>
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* 下方展示的表格 */}

        <Table
          columns={columns}
          dataSource={data}
          id="table"
          pagination={{
            total: total, // 总条目数
            defaultCurrent: 1, // 默认页数
            pageSize: 10, // 每页条数
            showSizeChanger: false, // 显示每页条数切换器
            onChange: (page, pageSize) => {
              dispatch(fetchPeoDataAction({ page: page, pageSize: pageSize }));
              console.log("页数变化：", page);
              console.log("每页条数变化：", pageSize);
            },
          }}
        ></Table>
      </div>
    </PeoManWrapper>
  );
};

export default PeoMan;
