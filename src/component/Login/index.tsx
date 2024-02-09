import React from "react";
import { Checkbox, Form, Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { loginIn } from "./service/login";

const onFinishFailed = (errInfo: any) => {
  console.log("失败", errInfo);
};

export type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state.from.pathname || "/";

  function submit(datas: FieldType) {
    console.log("点击====================");

    loginIn(datas).then((res) => {
      if (res.data) {
        localStorage.setItem("token", res.data);
        console.log("登录成功==================");

        // 登录成功后进行页面导航
        navigate(from, { replace: true });
      } else {
        console.log("登陆失败========================");
      }
    });
  }
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: false }}
        onFinish={(values) => {
          submit(values);
        }}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "请输入密码！" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
