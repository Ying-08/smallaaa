import React, { useEffect } from "react";
import { useAppDispatch, useAppSeletor } from "../../store";
import { fetchSetDataAction } from "./store/set";
import SetWrapper from "./style";
import { RightOutlined } from "@ant-design/icons";
import { Space, Select, message } from "antd";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "350px",
  height: "160px",
  // color: "#fff",
  lineHeight: "160px",
  // textAlign: "center",
  // background: "#364d79",
};

const Set = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selector = useAppSeletor((state) => state.setSlice);

  let swiper = selector.swipers;
  let mainIntro = selector.mainIntro;
  let groupIntro = selector.groupIntro;
  let anns = selector.annInSet;
  let id: number = 1;

  console.log("取得的selctor", groupIntro);
  useEffect(() => {
    dispatch(fetchSetDataAction(id));
  }, []);

  function handleChange(value: any) {
    id = value;
    console.log("点击了选择器", id);
    dispatch(fetchSetDataAction(id));
  }

  return (
    <SetWrapper>
      <div className="set">
        <div className="left">
          <div className="title">小程序界面</div>
          <button
            className="appLetsEdit"
            onClick={() => {
              navigate("/showSet");
            }}
          >
            编辑
          </button>
          <div className="content">
            <Carousel
              style={{ margin: "30 auto 30 0" }}
              autoplay={true}
              dots={{ className: "dots" }}
            >
              {swiper.map((item: any, index: number) => (
                <div key={index}>
                  <img src={item} alt="" style={{ ...contentStyle }} />
                </div>
              ))}
            </Carousel>

            <div className="mainIntro">
              {mainIntro.map((item: any, index: number) => (
                <div key={index}>
                  <div className="title">{item.title}</div>
                  <div className="content">{item.content}</div>
                  <img src={item.url} alt=""></img>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="ann">
            <div className="title">通知公告</div>
            <button
              className="annEdit"
              onClick={() => {
                navigate("/annSet");
              }}
            >
              编辑
            </button>
            <div className="content-item">
              {anns.map((item: any, index: number) => (
                <div key={index}>
                  <div className="con-title">{item.title}</div>
                  <div className="con-content">{item.content}</div>
                  <div className="arrow">
                    <RightOutlined />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cateIntro">
            <div className="title">组别介绍</div>
            <button
              className="cateEidt"
              onClick={() => {
                navigate(`/set/editGroupIntro/${id}`);
              }}
            >
              编辑
            </button>
            <div className="content">
              <div className="title">项目管理</div>
              <div className="drop">
                <Space wrap>
                  <Select
                    defaultValue="前端组"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                      { value: "0", label: "后台组" },
                      { value: "1", label: "前端组" },
                      { value: "2", label: "AI组" },
                      { value: "3", label: "传媒组" },
                      { value: "4", label: "机械组" },
                      { value: "5", label: "电控组" },
                      { value: "6", label: "管理组" },
                    ]}
                  ></Select>
                </Space>
              </div>
              <div className="text">
                <div className="content">
                  <div className="title">工作内容</div>
                  <div>{groupIntro.content}</div>
                </div>
                <div className="required">
                  <div className="title">招新需求</div>
                  <div>{groupIntro.required}</div>
                </div>
                <div className="harvest">
                  <div className="title">未来收获</div>
                  <div>{groupIntro.harvest}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SetWrapper>
  );
};

export default Set;
