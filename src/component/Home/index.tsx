import React, { ReactNode, useEffect } from "react";
import {
  TrademarkCircleOutlined,
  UserOutlined,
  TeamOutlined,
  ProfileOutlined,
  ReadOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { lazy } from "react";
import { HomeWrapper } from "./style";
import HorizontalBarChart from "../BarChart";
import { FC } from "react";
import { useAppDispatch, useAppSeletor } from "../../store";
import { fetchDropDataAction, fetchHomeDataAction } from "./store/home";
import { Select, Space, Table } from "antd";
import { Divider, List, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { TableProps } from "antd";

interface IProps {
  children?: ReactNode;
}

// FC的作用？
const Home: FC<IProps> = () => {
  const navigate = useNavigate();
  // 获取相应的数据
  const state = useAppSeletor((state) => state);
  const useSel = state.home;
  const userAllData = state.home.userAllData;
  const anns = state.home.annInHome;

  // 设置一个存储时间的数组对象
  interface eventTimeType {
    startTime?: string;
    endTime?: string;
  }
  let eventsTime: eventTimeType[] = [
    {
      startTime: "",
      endTime: "",
    },
    {
      startTime: "",
      endTime: "",
    },
    {
      startTime: "",
      endTime: "",
    },
  ];

  if (userAllData) {
    userAllData.map((item) => {
      if (item.name === "面试") {
        eventsTime[0].startTime = item?.startTime;
        eventsTime[0].endTime = item?.endTime;
      } else if (item.name === "一轮考核") {
        eventsTime[1].startTime = item?.startTime;
        eventsTime[1].endTime = item?.endTime;
      } else if (item.name === "二轮考核") {
        eventsTime[2].startTime = item?.startTime;
        eventsTime[2].endTime = item?.endTime;
      }

      return 0;
    });
  }

  // 获取用户的身份信息
  let identity = state.user.anyToken;
  console.log("打印一下用户的身份信息", identity.userGroup);

  // 发起网络请求
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("进入useeffect");
    dispatch(fetchHomeDataAction(identity.userGroup));
    dispatch(fetchDropDataAction(0));
  }, []);

  // 考核管理
  const handleChange = (value: string) => {
    if (value === "前端组") {
      dispatch(fetchDropDataAction(1));
    }
    if (value === "后端组") {
      dispatch(fetchDropDataAction(1));
    }
    if (value === "AI组") {
      dispatch(fetchDropDataAction(1));
    }
    if (value === "传媒组") {
      dispatch(fetchDropDataAction(1));
    }
    if (value === "管理组") {
      dispatch(fetchDropDataAction(1));
    }
    if (value === "电控组") {
      dispatch(fetchDropDataAction(1));
    }
    if (value === "机械组") {
      dispatch(fetchDropDataAction(1));
    }
    if (value === "管理组") {
      console.log("又点到管理组===================");
      dispatch(fetchDropDataAction(0));
    }
  };

  // 人员管理的数据
  const columns: TableProps["columns"] = [
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
      title: "组别",
      dataIndex: "noGroup",
      key: "noGroup",
      render: (text, record, index) => <span>{text}</span>,
    },
    {
      title: "考核分数",
      dataIndex: "scor",
      key: "scor",
      render: (text) => <span>{text}</span>,
    },
  ];

  const selector: [] = useAppSeletor((state) => state.home.annInHome);
  const dataSource = useAppSeletor((state) => state.home.people);

  // list组件的数据

  return (
    <HomeWrapper>
      <div className="home">
        <div className="above">
          <div className="left">
            <div className="overall-data">
              <div className="item">
                <div className="icon-wrapper one-i">
                  <TrademarkCircleOutlined
                    style={{ fontSize: "26px", color: "#33afec" }}
                  />
                </div>
                <div className="item-title">已注册</div>
                <div className="item-data">{useSel.reg}</div>
              </div>
              {/* 已报名 */}
              <div className="item">
                <div className="icon-wrapper two-i">
                  <TeamOutlined
                    style={{ fontSize: "26px", color: "#FACFA0" }}
                  />
                </div>
                <div className="item-title">已报名</div>
                <div className="item-data">{useSel.sign}</div>
              </div>
              {/* 面试 */}
              <div className="item">
                <div className="icon-wrapper three-i">
                  <UserOutlined
                    style={{ fontSize: "26px", color: "#AFEAF9" }}
                  />
                </div>
                <div className="item-title">面试</div>
                <div className="item-data">{useSel.interview}</div>
              </div>
              {/* 一轮考核 */}
              <div className="item">
                <div className="icon-wrapper four-i">
                  <ProfileOutlined
                    style={{ fontSize: "26px", color: "#E85014" }}
                  />
                </div>
                <div className="item-title">一轮考核</div>
                <div className="item-data">{useSel.firstExam}</div>
              </div>
              {/* 二轮考核 */}
              <div className="item">
                <div className="icon-wrapper five-i">
                  <ReadOutlined
                    style={{ fontSize: "26px", color: "#13E9F0" }}
                  />
                </div>
                <div className="item-title">二轮考核</div>
                <div className="item-data">{useSel.secExam}</div>
              </div>
            </div>

            {/* 人员管理 */}
            <div className="peo-man">
              <div className="peo-title">人员管理</div>
              <button
                className="ell"
                onClick={() => {
                  navigate("/peoMan");
                }}
              >
                ...
              </button>
              <Table
                pagination={{ pageSize: 2 }}
                columns={columns}
                dataSource={dataSource}
              ></Table>
            </div>
          </div>

          <div className="right clearfix">
            {/* 各组进度 */}
            {/* <div className="process clearfix">
            <div className="pro-title">各组考核进度</div>
            <HorizontalBarChart />
          </div> */}

            {/* 通知公告 */}
            <div className="ann">
              <List
                header={
                  <div>
                    通知公告
                    <button
                      className="ell"
                      onClick={() => {
                        navigate("/annSet");
                      }}
                    >
                      ...
                    </button>
                  </div>
                }
                bordered
                dataSource={selector}
                renderItem={(item: any) => (
                  <List.Item
                    onClick={() => {
                      navigate(`/annSet/annEdit/${item.id}`);
                    }}
                  >
                    {item.title}
                    <RightOutlined style={{ float: "right" }}></RightOutlined>
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>

        {/* 考核管理 */}
        <div className="below">
          <div className="accessMan">
            <div className="acc-title">考核管理</div>
            <div className="drop">
              <Space wrap>
                <Select
                  defaultValue="管理组"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: "管理组", label: "管理组" },
                    { value: "前端组", label: "前端组" },
                    { value: "后台组", label: "后台组" },
                    { value: "AI组", label: "AI组" },
                    { value: "传媒组", label: "传媒组" },
                    { value: "机械组", label: "机械组" },
                    { value: "电控组", label: "电控组" },
                  ]}
                ></Select>
              </Space>
            </div>
            <div className="acc-mid">
              <div className="item-1">
                <div className="square">
                  <div className="square-con">面试</div>
                </div>
                <div className="acc-status">已完成</div>
                <div className="acc-time">{eventsTime[0].startTime + " -"}</div>
                <div>{eventsTime[0].endTime}</div>
              </div>
              <ArrowRightOutlined style={{ marginRight: 20 }} />
              <div className="item-2">
                <div className="square">
                  <div className="square-con">一轮考核</div>
                </div>
                <div className="acc-status">已完成</div>
                <div className="acc-time">
                  {eventsTime[1].startTime + " " + "-"}
                </div>
                <div>{eventsTime[1].endTime}</div>
              </div>
              <ArrowRightOutlined style={{ marginRight: 20 }} />
              <div className="item-3">
                <div className="square">
                  <div className="square-con">二轮考核</div>
                </div>
                <div className="acc-status">已完成</div>
                <div className="acc-time">
                  {eventsTime[2].startTime + " " + "-"}
                </div>
                <div>{eventsTime[2].endTime}</div>
              </div>
              <ArrowRightOutlined style={{ marginRight: 20 }} />
              <div className="item-4">
                <div className="square">
                  <div className="square-con">最终答辩</div>
                </div>
                <div className="acc-status">已完成</div>
                <div className="acc-time">2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
