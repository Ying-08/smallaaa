import { Table } from "antd";
import React, { useEffect } from "react";
import AccountsWrapper from "./style";
import { useAppDispatch, useAppSeletor } from "../../store";
import { fetchAccDataAction } from "./store/accounts";
import { addAccounts, deleteAccounts } from "./service/accounts";
import { useState } from "react";
import { Form, Input, Button, Modal, Select } from "antd";
const { Option } = Select;

const Accounts = () => {
  type dataType = {
    // key: string;
    num?: number;
    nick: string;
    cate: string;
    name: string;
    phone: string;
    time: string;
  };

  // 表格的表头
  const columns = [
    {
      title: "序号",
      dataIndex: "num",
      key: "num",
      render: (text: any, records: any, index: number) => (
        <span>{index + 1}</span>
      ),
    },
    {
      title: "用户昵称",
      dataIndex: "nickname",
      key: "nickname",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "组别",
      dataIndex: "userGroup",
      key: "userGroup",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "手机号码",
      dataIndex: "phone",
      key: "phone",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
      render: (text: any, records: any) => (
        <span>
          <button
            className="delete"
            onClick={() => {
              deleteAcc(records.username);
            }}
          >
            删除
          </button>
        </span>
      ),
    },
  ];

  // 获取state
  const dispatch = useAppDispatch();
  const state = useAppSeletor((state) => state.accounts);
  useEffect(() => {
    dispatch(fetchAccDataAction({ page: 1, pageSize: 10 }));
  }, []);

  const total = state.total;
  const dataSource: dataType[] = state.records.map((record: any, index) => ({
    ...record,
    key: index.toString(), // 使用索引作为 key
  }));

  // 删除账号的函数
  function deleteAcc(record: any) {
    console.log("点击了删除", record);
    deleteAccounts(record);
  }

  // 添加账号
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleSubmit = (values: any) => {
    console.log("表单提交的数据:", values);
    // 在这里可以进行表单提交的逻辑处理
    setVisible(false); // 提交完毕后关闭模态框
    addAccounts(values);
  };

  return (
    <AccountsWrapper>
      <div className="edit">
        <button className="add" onClick={handleOpenModal}>
          +添加
        </button>
        <Modal
          title="添加账号"
          open={visible}
          onCancel={handleCloseModal}
          footer={null} // 不显示默认的底部按钮
        >
          <Form onFinish={handleSubmit}>
            <Form.Item
              label="账户名"
              name="username"
              rules={[{ required: true, message: "请输入账户名" }]}
            >
              <Input placeholder="请输入账户名" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input placeholder="请输入密码" />
            </Form.Item>

            <Form.Item
              label="组别"
              name="select"
              rules={[{ required: true, message: "请选择一个选项!" }]}
            >
              <Select placeholder="请选择">
                <Option value="0">0：后台</Option>
                <Option value="1">1：前端</Option>
                <Option value="2">2：AI</Option>
                <Option value="3">3：传媒</Option>
                <Option value="4">4：机械</Option>
                <Option value="5">5：电控</Option>
                <Option value="6">6-11：管理</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: "请输入姓名" }]}
            >
              <Input placeholder="请输入姓名" />
            </Form.Item>
            <Form.Item
              label="电话号码"
              name="phone"
              rules={[{ required: true, message: "请输入电话号码" }]}
            >
              <Input placeholder="请输入电话号码" />
            </Form.Item>
            <Form.Item
              label="昵称"
              name="nickname"
              rules={[{ required: true, message: "请输入昵称" }]}
            >
              <Input placeholder="请输入昵称" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{float:"right"}}>
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
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
                  fetchAccDataAction({ page: page, pageSize: pageSize })
                );
              },
            }}
          ></Table>
        </div>
      </div>
    </AccountsWrapper>
  );
};

export default Accounts;
