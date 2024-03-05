import React, { ReactNode } from "react";
import { Checkbox, Form, Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { FC } from "react";
import { useAppDispatch } from "../../store";
import { fetchUserAction } from "./store/login";
import LoginWrapper from "./style";
import bgImg from "./后台背景图.png"
interface IProps {
  children?: ReactNode;
}

const onFinishFailed = (errInfo: any) => {
  console.log("失败", errInfo);
};

export type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  function submit(datas: FieldType) {
    // 发起网络请求
    dispatch(fetchUserAction({ datas, from, navigate }));
  }

  return (
    <LoginWrapper>
      <div>
        <img src={require('./后台背景图.png')} alt="" className="back" />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600,position:"absolute",top:"50%",left:"70%" }}
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}  style={{float:"right"}}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginWrapper>
  );
};

export default Login;
