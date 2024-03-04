import React from "react";
import EditContentWrapper from "./style";
import { Form, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import { message, Button, Select } from "antd";
import { useState } from "react";
import { UploadChangeParam } from "antd/lib/upload/interface";
import { Option } from "antd/es/mentions";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { editExamProcess } from "./service/editContent";

const EditContent = () => {
  const { RangePicker } = DatePicker;
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // token
  let token = localStorage.getItem("token") || "";
  // 全局提示框
  const [messageApi, contextHolder] = message.useMessage();
  const info = (text: string) => {
    messageApi.info(text);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // 上传文件前检查文件大小
  const beforeUpload = (file: RcFile) => {
    return new Promise<File>((resolve, reject) => {
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        message.error("文件必须小于10MB!");
        reject();
      } else {
        resolve(file);
      }
    });
  };

  // url数组
  let [urls, setUrl] = useState<string[]>([]);

  // 超出大小的删除上传框
  const handleChange = (file: any) => {
    // 设置url数组
    if (file.file.status === "done") {
      setUrl([...urls, file.file.response.data]);
    }
    // 超出大小的文件处理
    let list: UploadFile[] = [];
    file.fileList.map((file: any) => {
      if (file.size) {
        let res = file.size / 1024 / 1024 < 10;
        if (res) {
          list.push(file);
        }
      }
    });

    setFileList(list);
  };

  // 提交表单
  const handleSubmit = (values: any) => {
    const dateObj = values.time[0].$d; // 这是你的日期对象
    const dateObj1 = values.time[1].$d;
    // 使用 Day.js 格式化日期
    const startTime = dayjs(dateObj).format("YYYY-MM-DD HH:mm:ss");
    const endTime = dayjs(dateObj1).format("YYYY-MM-DD HH:mm:ss");

    editExamProcess({name : values.select, startTime : startTime, endTime : endTime, contentUrl : urls.toString()})?.then((res) => {
      info(res.msg);
    });
  };

  return (
    <EditContentWrapper>
      {contextHolder}
      <div className="editcontent">
        <div className="title">考核内容编辑</div>
        <div className="content">
          <Form onFinish={handleSubmit}>
            <Form.Item
              label="考核名称"
              name="select"
              rules={[{ required: true, message: "请输入考核名称" }]}
            >
              <Input placeholder="请输入考核名称"></Input>
            </Form.Item>

            <Form.Item
              label="考核时间"
              name="time"
              rules={[{ required: true }]}
            >
              <RangePicker />
            </Form.Item>

            <Form.Item
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[{ required: true }]}
            >
              <Upload
                listType="picture-card"
                fileList={fileList}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                onRemove={(file) => {
                  let tempUrl = [...urls];
                  tempUrl.map((item: any, index: number) => {
                    if (item === file?.response?.data || file?.url) {
                      console.log("删除url==================");
                      tempUrl.splice(index, 1);
                    }
                  });
                  setUrl([...tempUrl]);
                }}
                headers={{
                  token,
                }}
                action="https://smalla.zifeiyu.love/api/web/assess/uploadfile"
              >
                <button style={{ border: 0, background: "none" }} type="button">
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
            </Form.Item>

            <Form.Item style={{ float: "right" }}>
              <Button
                style={{ marginRight: 20 }}
                onClick={() => {
                  window.history.go(-1);
                }}
              >
                返回
              </Button>
              <Button htmlType="submit">提交</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </EditContentWrapper>
  );
};

export default EditContent;
