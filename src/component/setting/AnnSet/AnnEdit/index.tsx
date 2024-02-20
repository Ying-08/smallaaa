import React, { FC, ReactNode, memo, useEffect } from "react";
import { useAppDispatch, useAppSeletor } from "../../../../store";
import { fetchAnnEditDataAction } from "./store/annEdit";
import AnnEditWrapper from "./style";
import { reviseAnn } from "./service/annEidt";
import { Button } from "antd";
import { useState } from "react";

interface IPros {
  children?: ReactNode;
}

const AnnEdit: FC<IPros> = () => {
  useEffect(() => {
    if (id) {
      dispatch(fetchAnnEditDataAction(id));
    }
  }, []);

  // 获取当前页面的 URL 路径
  const url = window.location.pathname;

  // 使用 split 方法将 URL 路径以 '/' 分割成数组，并获取最后一个元素
  const parts = url.split("/");
  let id = parts[parts.length - 1];

  const dispatch = useAppDispatch();
  let selector: any = useAppSeletor((state) => state.annEdit.data);

  const [inputValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setInputValue(id ? selector?.title : "");
    setTextValue(id ? selector?.content : "");
  }, [selector]);

  // 获取发布人的信息
  let temp = localStorage.getItem("AnyToken");
  let info: any;
  if (temp) {
    info = { ...JSON.parse(temp) };
  }

  return (
    <AnnEditWrapper>
      <div className="ann">
        <div className="above">
          <div>标题</div>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div className="below">
          <div>内容</div>
          <textarea
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="buttons">
          <Button
            style={{ marginRight: 30 }}
            onClick={() => {
              window.history.go(-1);
            }}
          >
            返回
          </Button>
          <Button
            style={{ marginRight: 30 }}
            onClick={() => {
              reviseAnn(
                id,
                inputValue,
                textValue,
                info.username,
                false,
                info.userGroup
              );
            }}
          >
            暂存
          </Button>
          <Button
            onClick={() => {
              reviseAnn(
                "",
                inputValue,
                textValue,
                info.username,
                true,
                info.userGroup
              )
                .then(() => {
                  window.history.go(-1);
                })
                .catch(() => {});
            }}
          >
            提交
          </Button>
        </div>
      </div>
    </AnnEditWrapper>
  );
};

export default memo(AnnEdit);
