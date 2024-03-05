import { Form, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import ShowSetWrapper from "./style";
import TextArea from "antd/es/input/TextArea";
import { Modal } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { Button } from "antd";
import { fetchPicDataAction } from "./store/showSet";
import { useAppDispatch, useAppSeletor } from "../../../store";
import { editPic } from "./service/showSet";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const ShowSet = () => {
  const selector = useAppSeletor((state) => state.picSlice.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPicDataAction(true));
  }, []);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  // 表单数据的存储
  const [imgUrl, setImgUrl] = useState(Array(selector.length).fill(""));
  const [inputValues, setInputValues] = useState(
    Array(selector.length).fill("")
  );

  const [textValues, setTextValues] = useState(Array(selector.length).fill(""));
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // 输入框改变
  const handleInputChange = (index: number, value: any) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleTextChange = (index: number, value: any) => {
    const newTextValues = [...textValues];
    newTextValues[index] = value;
    setTextValues(newTextValues);
  };

  // 设置upload已有的图片
  let oldImage: UploadFile[] = [];

  selector.map((item: any, index: number) => {
    oldImage.push({
      uid: "-" + index,
      name: "image" + index + ".png",
      status: "done",
      url: item.url,
    });
  });

  useEffect(() => {
    setFileList(oldImage);
    setImgUrl(selector.map((item: any) => item.url));
    setInputValues(selector.map((item: any) => item.title));
    setTextValues(selector.map((item: any) => item.content));
  }, [selector]);

  // 取消预览
  const handleCancel = () => setPreviewOpen(false);

  // 图片的预览
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  // 新增图片
  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  // 上传按钮
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  // 确定上传

  function onFinsh() {
    let tempArr = [];
    for (let i = 0; i < imgUrl.length; i++) {
      tempArr.push({
        url: imgUrl[i],
        title: inputValues[i],
        content: textValues[i],
      });
    }

    editPic(true, tempArr);
  }

  let token: string = localStorage.getItem("token") || "";

  return (
    <ShowSetWrapper>
      <div className="show-set">
        <div className="pic">
          <Form onFinish={onFinsh}>
            <Form.Item label="轮播图图片">
              <Upload
                fileList={fileList}
                listType="picture-card"
                onPreview={handlePreview}
                onRemove={(file) => {
                  let tempUrl = [...imgUrl];
                  let tempInput = [...inputValues];
                  let tempText = [...textValues];
                  imgUrl.map((item, index) => {
                    if (item === file?.response?.data || item === file?.url) {
                      tempUrl.splice(index, 1);
                      tempInput.splice(index, 1);
                      tempText.splice(index, 1);
                      setImgUrl([...tempUrl]);
                      setInputValues([...tempInput]);
                      setTextValues([...tempText]);
                    }
                  });
                }}
                onChange={(info) => {
                  if (info.file.status === "done") {
                    // 上传完成后，获取服务器端返回的结果
                    setImgUrl([...imgUrl, info.file.response.data]);
                    setInputValues([...inputValues, null]);
                    setTextValues([...textValues, null]);
                  }
                  handleChange(info);
                }}
                accept="image/*"
                headers={{
                  token: token,
                }}
                action="https://smalla.zifeiyu.love/web/assess/uploadfile"
              >
                {imgUrl.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </Form.Item>
            <Form.Item>
              <div style={{ marginBottom: 20 }}>内容：</div>
              {imgUrl.map((file: any, index) => (
                <div key={index} className="inputs">
                  <Input
                    placeholder={"输入小标题" + (index + 1)}
                    value={inputValues[index]}
                    style={{ width: 200, display: "block", marginBottom: 20 }}
                    onChange={(e) => {
                      handleInputChange(index, e.target.value);
                    }}
                  />
                  <TextArea
                    placeholder="输入内容"
                    value={textValues[index]}
                    style={{
                      width: 400,
                      resize: "none",
                      height: 100,
                      marginBottom: 20,
                    }}
                    onChange={(e) => {
                      handleTextChange(index, e.target.value);
                    }}
                  />
                </div>
              ))}
            </Form.Item>
            <Form.Item>
              <div className="buttons">
                <Button
                  style={{ marginRight: 20 }}
                  onClick={() => {
                    window.history.go(-1);
                  }}
                >
                  返回
                </Button>
                {/* <Button style={{ marginRight: 20 }} onClick={}>
                  暂存
                </Button> */}
                <Button style={{ marginRight: 20 }} htmlType="submit">
                  确定
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </ShowSetWrapper>
  );
};

export default ShowSet;
