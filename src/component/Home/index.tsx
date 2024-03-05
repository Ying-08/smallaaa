import React, {Fragment, ReactNode, useEffect} from "react";
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
import { fetchHomeDataAction } from "./store/home";
import { Select, Space, Table } from "antd";
import { Divider, List, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { TableProps } from "antd";
import dayjs from "dayjs";

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

  console.log("userAllData==================",useSel)
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

  // 发起网络请求
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction(identity.userGroup));
  }, []);


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
              {/*循环渲染考核人数*/}
              {
                useSel.exams.map((item:any,index:number)=>{
                  return <div className="item">
                    <div className="icon-wrapper three-i">
                      <UserOutlined
                          style={{ fontSize: "26px", color: "#AFEAF9" }}
                      />
                    </div>
                    <div className="item-title">{item.name}</div>
                    <div className="item-data">{item.count}</div>
                  </div>
                })
              }
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
            </div>
            <div className="acc-mid">
              {
                useSel.userAllData.map((item:any,index:number)=> {
                  return <Fragment key={item.id}>
                    <div className="item-1">
                      <div className="square">
                        <div className="square-con">{item.name}</div>
                      </div>
                      <div className="acc-status">{dayjs(item.startTime).isAfter(dayjs())?"未开始":dayjs(item.endTime).isBefore(dayjs())?"已结束":"进行中"}</div>
                      <div className="acc-time">{item.startTime + " -"}</div>
                      <div>{item.endTime}</div>
                    </div>
                    {index==useSel.userAllData.length-1?"":<ArrowRightOutlined style={{marginRight: 20}}/>}
                  </Fragment>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
