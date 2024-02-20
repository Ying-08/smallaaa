import { Form, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import EditGroupWrapper from "./style";
import { editGroup } from "./service/editGroup";

const EditGroupIntro = () => {
  // 获取当前页面的 URL 路径
  const url = window.location.pathname;

  // 使用 split 方法将 URL 路径以 '/' 分割成数组，并获取最后一个元素
  const parts = url.split("/");
  let id: number = Number(parts[parts.length - 1]);
  console.log("是否拿到id", id);

  function onFinsh(values: any) {
    console.log("提交表单", values);
    editGroup(id, values.content, values.required, values.harvest);
  }

  return (
    <EditGroupWrapper>
      <div>
        <div className="form">
          <Form onFinish={onFinsh}>
            <Form.Item
              label="工作内容"
              name="content"
              rules={[{ required: true, message: "请输入内容" }]}
            >
              <TextArea
                placeholder="请输入内容"
                style={{ resize: "none", height: 150 }}
              />
            </Form.Item>
            <Form.Item
              label="招新需求"
              name="required"
              rules={[{ required: true, message: "请输入内容" }]}
            >
              <TextArea
                placeholder="请输入内容"
                style={{ resize: "none", height: 150 }}
              />
            </Form.Item>
            <Form.Item
              label="未来收获"
              name="harvest"
              rules={[{ required: true, message: "请输入内容" }]}
            >
              <TextArea
                placeholder="请输入内容"
                style={{ resize: "none", height: 150 }}
              />
            </Form.Item>

            <Form.Item>
              <div className="buttons" style={{ float: "right" }}>
                <Button
                  style={{ marginRight: 20 }}
                  onClick={() => {
                    window.history.go(-1);
                  }}
                >
                  返回
                </Button>
                <Button htmlType="submit">提交</Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </EditGroupWrapper>
  );
};

export default EditGroupIntro;
